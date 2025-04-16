import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { investmentService } from '../investment.services';
import localeEnIN from '@angular/common/locales/en-IN';
registerLocaleData(localeEnIN, 'en-IN');

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// results = input<
// year: number;
//   interest: number;
//   valueEndOfYear:number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// >();

 private investmentService = inject(investmentService);
results = computed(() => this.investmentService.resultData());
}
