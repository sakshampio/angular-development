import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus : 'online' | 'offline' |'unknown' = 'offline';
  constructor(){
    
  }
// we should use ngOninit to initillized styles the constructor is only used only to basic class initillized classes.
  ngOnInit(){
    setInterval(() =>{
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus = 'online';
      }else if (rnd<0.9){
        this.currentStatus = 'offline';
      }
      else {
        this.currentStatus = 'unknown'
      }
    },5000);
  }
}

