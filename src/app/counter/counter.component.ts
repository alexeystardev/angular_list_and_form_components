import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

	constructor(private cs: ButtonService) { }
	
	// color:string='red'
	number:number=0

  ngOnInit(): void {

	this.cs.numberStatus.subscribe((number)=>{
		this.number=number
	})

		// this.cs.colorStatus.subscribe((color)=>{
		// 	this.color=color
		// })
}
}
