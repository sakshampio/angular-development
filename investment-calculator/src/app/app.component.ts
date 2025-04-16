import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import {registerLocaleData} from '@angular/common';
import LocaleIndia from "@angular/common/locales/en-IN";
registerLocaleData(LocaleIndia);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';

  // change in this data will make impact on ui so we can do it with the help og signals
  // resultData?:{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear:number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]; 


  
  
}
