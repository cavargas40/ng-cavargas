import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  message: string;
  passphrase: string;
  mode: CryptoMode = CryptoMode.DECRYPT;
  result: string;

  modes = [CryptoMode.DECRYPT, CryptoMode.ENCRYPT];

  constructor() {}

  ngOnInit(): void {}

  crypt() {
    if (this.mode === CryptoMode.ENCRYPT) {
      this.result = CryptoJS.AES.encrypt(
        this.message,
        this.passphrase
      ).toString();
    } else {
      const bytes = CryptoJS.AES.decrypt(this.message, this.passphrase);
      this.result = bytes.toString(CryptoJS.enc.Utf8);
    }
  }
}

export enum CryptoMode {
  DECRYPT = 'decrypt',
  ENCRYPT = 'encrypt',
}
