import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { FrontFetchService } from '../../server/front-fetch.service';


@Component({
  selector: 'app-balance-modal',
  templateUrl: './balance-modal.component.html',
  styleUrls: ['./balance-modal.component.css']
})
export class BalanceModalComponent implements OnInit {
  public responseData;
  public searchField = false;
  public giftCodeUrl;
  public amount;
  public barcodeUrl = 'https://harthousewineandtapa.com/angularServices/barcode/barcode.php?codetype=Code128&size=50&text=';
  public postData = {
    'voucherCode': ''
  };

  constructor(public dialogRef: MatDialogRef<BalanceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  public getData: FrontFetchService, public snackBar: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  closeDeliveryModal() {
    this.dialogRef.close();
  }

  checkBalance(voucherCode) {
    this.postData.voucherCode = voucherCode.value;
    this.getData.postData(this.postData, 'checkVoucherCode').then((result) => {
      this.responseData = result;
      if (this.responseData.msg === 'error') {
        this.searchField = false;
        this.snackBar.open('Please enter a valid Gift Voucher Code!', 'Close', {
          duration: 5000
        });
      } else {
        this.giftCodeUrl = this.barcodeUrl + voucherCode;
        this.amount = parseFloat(this.responseData.amount).toFixed(2);
        this.searchField = true;
      }
    }, (err) => {
    });

  }

}
