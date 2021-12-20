import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  cardDetail = {
    discover: 123,
    chase: 234,
    boa: 456,
  };
  constructor(private httpClient: HttpClient) {}
  balanceDue() {
    return this.cardDetail;
  }
  getTodos() {
    const todos = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return todos;
  }
}
