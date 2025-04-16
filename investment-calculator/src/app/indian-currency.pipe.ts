import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency',
  standalone: true
})
export class IndianCurrencyPipe implements PipeTransform {

  transform(value: number | string  ): string {
    if(value == null ) return '';
    let numberStr = value.toString();
    console.log(numberStr);
    numberStr = numberStr.replace(/,/g, ''); // this is removing the commas whic is already present when it read values from input field by using two way binding so we removing it by using replace method
    console.log(numberStr);

    let num =  parseFloat(numberStr) ;

    if(isNaN(num)) return '';// if parsing fails and num is NaN, it returns an empty string
    // convert to indian currrency format 
    return num.toLocaleString('en-IN');
    

  }
}
