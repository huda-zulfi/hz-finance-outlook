import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  accountInfo = {
    creditAmount: 324,
    totalAmount: 2345,
    expireyDate: new Date(),
    
  }
  constructor() { }
  getData() {
    return this.accountInfo
  }
}
