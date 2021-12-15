import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  amount: any;

  constructor(private dataService: DataServiceService, private creditCard: CreditCardService) {}

  ngOnInit(): void {
    this.getAmount()
  }

  getAmount() {
    //TODO
    const accountInfo = this.creditCard.balanceDue();
    this.amount = accountInfo;
  }
}
