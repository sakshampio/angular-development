import { Component, HostBinding, HostListener, input, ViewEncapsulation,inject , ElementRef  } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation : ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()' //can also do with event bindin and cam also use hostlistner for this
  }
})
export class ControlComponent {
//  @HostBinding('class') className = 'control';
// @HostListener('click') onClick(){console.log('Clicked!');}
lable = input.required<string>();
private el =  inject(ElementRef)
onClick(){
  console.log('Clicked!');
  console.log(this.el);
  
  
}
}
