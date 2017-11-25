import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FrontFetchService } from '../server/front-fetch.service';

declare var paypal: any;

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  // Paypal API START //
  public didPaypalScriptLoad = false;

  paypalForm: FormGroup;
  isValidForm = false;
  public voucherPrice = [{
    amount: <number>null,
    description: <string>null
  }];

  public postData = {
    'gift_from': '',
    'payer_email': '',
    'gift_to': '',
    'reciever_email': '',
    'payment_date': '',
    'mc_gross': '',
    'txn_id': '',
    'payer_id': '',
    'token': ''
  };

  public buttonLoading = false;
  public paymentSuccess = false;
  public responseData;
  public authAmount;
  public giftedUserFullName;
  public giftedUserEmail;
  public giftCodeUrl;
  public giftCode;
  public senderEmail;
  public barcodeUrl = 'https://harthousewineandtapa.com/angularServices/barcode/barcode.php?codetype=Code128&size=50&text=';

  public paypalConfig: any = {
    env: 'sandbox',
    style: {
      layout: 'vertical',  // horizontal | vertical
      size: 'medium',    // medium | large | responsive
      shape: 'pill',      // pill | rect
      color: 'silver'       // gold | blue | silver | black
    },

    client: {
      sandbox: 'AXtyrndQ2sbXhJi5YziOImLGZR6kg5TQXHPpoQYg36c3dNpg7FNIBLmy1-F44NPeQvTqNVc9Y8CjVZ9n',
      production: 'xxxxxxxxxx'
    },

    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: this.paypalForm.value.amount, currency: 'CAD'
              }
            }
          ]
        }
      });
    },

    onAuthorize: (data, actions) => {
      this.buttonLoading = true;
      const paymentId = data.paymentID;
      const payerId = data.payerID;
      const paymentToken = data.paymentToken;
      this.giftedUserEmail = this.paypalForm.value.email;
      this.giftedUserFullName = this.paypalForm.value.fullName;

      actions.payment.get().then((paymentDetails) => {
        this.authAmount = paymentDetails.transactions[0].amount.total;
        this.senderEmail = paymentDetails.payer.payer_info.email;
        // Show a confirmation using the details from paymentDetails
        actions.payment.execute().then(() => {
          this.postData.gift_from = paymentDetails.payer.payer_info.first_name + ' ' + paymentDetails.payer.payer_info.last_name;
          this.postData.payer_email = this.senderEmail;
          this.postData.gift_to = this.giftedUserFullName;
          this.postData.reciever_email = this.giftedUserEmail;
          this.postData.payment_date = paymentDetails.create_time;
          this.postData.mc_gross = this.authAmount;
          this.postData.txn_id = paymentDetails.id;
          this.postData.payer_id = paymentDetails.payer.payer_info.payer_id;
          this.postData.token = data.paymentToken;

          this.getData.postData(this.postData, 'paypal').then((result) => {
            this.responseData = result;
            this.paymentSuccess = true;
            this.giftCode = this.responseData.giftVoucherCode;
            console.log(this.giftCode);
            this.giftCodeUrl = this.barcodeUrl + this.giftCode;
            this.buttonLoading = false;
          }, (err) => {
          });

        });

      });

    }
  };

  constructor(public getData: FrontFetchService) {
    this.paypalForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'amount': new FormControl(null, Validators.required)
    });
  }

  public ngOnInit() {
    this.isValid();
    this.voucherPriceLoop();
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.v4.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  // Paypal API END //

  isValid() {
    this.paypalForm.statusChanges.subscribe(
      (value) => {
        this.buttonLoading = true;
        if (value === 'INVALID') {
          this.buttonLoading = false;
          this.isValidForm = false;
          this.didPaypalScriptLoad = false;
        } else if (value === 'VALID') {
          if (!this.didPaypalScriptLoad) {
            this.isValidForm = true;
            this.loadPaypalScript().then(() => {
              paypal.Button.render(this.paypalConfig, '#paypal-button');
            });
          }
          this.buttonLoading = false;
        }
      }
    );
  }

  voucherPriceLoop() {
    this.voucherPrice = this.voucherPrice.splice(1, 2);
    const maxAmount = 250;
    const minAmount = 50;
    for (let i = minAmount; i <= maxAmount; i += 50) {
      const amount = i;
      const total = amount;
      this.voucherPrice.push(
        {
          amount: total,
          description: '$' + amount
        }
      );
    }
  }


}
