import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
number:number=0;
  constructor(private myCounter: ButtonService) { }


  ngOnInit(): void {
this.number=this.myCounter.getPm()
  }
  
    increment(number){
      this.number=this.myCounter.plus(number)
    }
    
    decrement(number){
       this.number=this.myCounter.minus(number)
    }
}
