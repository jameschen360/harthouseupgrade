import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var paypal: any;

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  // Paypal API START //
  public didPaypalScriptLoad = false;

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
      const paymentId = data.paymentId;
      const payerId = data.payerId;
      const paymentToken = data.paymentToken;
      this.authAmount = this.paypalForm.value.amount;
      this.authFullName = this.paypalForm.value.fullName;
      this.autheEmail = this.paypalForm.value.email;

      //CALL SERVER HTTP AND RETURN generate gift voucher code
      this.paymentSuccess = true;
    }
  };

  paypalForm: FormGroup;
  isValidForm = false;
  public voucherPrice = [{
    amount: <number>null,
    description: <string>null
  }];
  public buttonLoading = false;
  public paymentSuccess = false;
  public authAmount;
  public authFullName;
  public autheEmail;


  constructor() {
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
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
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
    const maxAmount = 150;
    for (let i = 50; i <= maxAmount; i += 10) {
      const amount = i;
      const activationFee = amount * 0.029 + 0.4;
      const total = amount + activationFee;
      this.voucherPrice.push(
        {
          amount: total,
          description: '$' + amount + '+' + activationFee.toFixed(2) + ' Activation Fee'
        }
      );
    }
  }


}
