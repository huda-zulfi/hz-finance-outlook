import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  cardDetail = {
    Discover: 123,
    Chase: 234,
    BOA: 456,

}
  constructor() { }
  balanceDue() {
   return this.cardDetail
  }
}
