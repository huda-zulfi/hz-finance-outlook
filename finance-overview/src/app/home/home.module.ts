import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, CreditCardsComponent],
  
  exports: [CreditCardsComponent],

  providers:[],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    FormsModule,
  ],
})
export class HomeModule {}
