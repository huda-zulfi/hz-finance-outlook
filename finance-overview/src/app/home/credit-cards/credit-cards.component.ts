import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card.service';


@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css'],
})
export class CreditCardsComponent implements OnInit {
  allBanksBills: any;
  todos: any;
  inputValue: string = "";

  constructor(private creditCard: CreditCardService) {}

  ngOnInit(): void {
    const balDel = this.creditCard.balanceDue();
    // for all banks
    this.allBanksBills = balDel;

    this.todos = this.creditCard.getTodos();
  }

 
}
