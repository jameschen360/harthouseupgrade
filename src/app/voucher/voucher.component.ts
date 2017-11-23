import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var paypal: any;

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit, AfterViewChecked {
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
                total: '1.00', currency: 'CAD'
              }
            }
          ]
        }
      });
    },

    onAuthorize: (data, actions) => {
      // show success page
      console.log(data);
      console.log('----------------------');
      console.log(actions);
    }
  };

  paypalForm: FormGroup;
  isValidForm = false;

  constructor() {
    this.paypalForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      'amount': new FormControl(null, Validators.required)
    });
  }

  public ngOnInit() {
    this.isValid();
  }

  public ngAfterViewChecked(): void {

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
        if (value === 'INVALID') {
          this.isValidForm = false;
        } else if (value === 'VALID') {
          this.isValidForm = true;
          if (!this.didPaypalScriptLoad) {
            this.loadPaypalScript().then(() => {
              paypal.Button.render(this.paypalConfig, '#paypal-button');
            });
          }
        }
      }
    );
  }


}
