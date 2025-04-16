import { Component, EventEmitter,  output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input-model';
import { investmentService } from '../investment.services';
import { CurrencyPipe } from '@angular/common';
import { IndianCurrencyPipe } from '../indian-currency.pipe';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,IndianCurrencyPipe],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

enteredInitialInvestment = signal('');
enteredAnnualInvestment = signal('');
enteredExpectedReturn = signal('5');
enteredDuration = signal('10');
  currencyPipe: any;
constructor(private investmentService : investmentService) {}

onSubmit(){
  this.investmentService.calculateInvestmentResults({
    initialInvestment : this.parseFormattedNumber(this.enteredInitialInvestment()),
    duration : +this.enteredDuration(),
    expectedReturn : +this.enteredExpectedReturn(),
    annualInvestment : this.parseFormattedNumber(this.enteredAnnualInvestment())
  });
}

// // this method is updating the enteredAnnualInvestment at input field in indian currency 
// updateEnteredAnnualInvestment(value : number){
//   this.enteredAnnualInvestment.set(this.formatingInputValue(value));
// }

// //this method is updating the enteredInitialInvestment at input field in indian currency 
// updateEnteredInitialInvestment(value : number){
//   this.enteredInitialInvestment.set(this.formatingInputValue(value));
// }


// // formating the input value as an input formate 
// formatingInputValue(value : number){

// let numberStr = value.toString();

// numberStr = numberStr.replace(/,/g, ''); // this is removing the commas whic is already present when it read values from input field by using two way binding so we removing it by using replace method
// console.log(numberStr);

// // we can also Use regex to insert commas after every two digits from the right to formate numbers 
// // let formattedNumber = numberStr.replace(/(\d)(?=(\d{2}){1,}(?!\d))/g, '$1,');


// let formattedNumber =  this.formateToIndianCurrency(numberStr);
// console.log(formattedNumber);
// return formattedNumber;
// }

// again reconverting that string into number for calculation purpose 
parseFormattedNumber(formattedNumber: string ): number {

 let numberStr = formattedNumber.replace(/,/g, '');// Remove all commas from the formatted string providing a coomaless string 
 return parseFloat(numberStr);// Convert the string back to a floating point number

  }

//   // this methid is converting the data into indian currency formate 
//   // The 'en-IN' locale ensures that the number is formatted with commas placed according to the Indian numbering system
//   formateToIndianCurrency(num: string) : string{
//     const parsedNum = parseFloat(num);
//     return parsedNum.toLocaleString('en-IN');
//   }

  
  }
  
function str(value: number) {
  throw new Error('Function not implemented.');
}
 
