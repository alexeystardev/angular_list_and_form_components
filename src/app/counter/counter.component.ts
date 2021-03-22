import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

	constructor(private cs: ButtonService) { }
	number:number=0
	curPrice=0

  ngOnInit(): void {
	  this.cs.numberStatus.subscribe((number)=>{
		  this.number=number
		})

		this.cs.numberStatus.subscribe((subscribe)=>{
		  this.curPrice=subscribe
		  if(this.number < 0){
			  this.curPrice= 0
			  this.number= 0
		  } else {
			  this.curPrice=this.curPrice*12
		  }
		})

}
butclick(){
	if(this.number == 0){
		alert ( "nothing to buy" )
	} else {
		alert( this.curPrice  + ' ' + 'ils' )
	}
}
}
