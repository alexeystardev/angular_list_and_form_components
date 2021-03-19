import { Component, Input, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-plusminus',
  templateUrl: './plusminus.component.html',
  styleUrls: ['./plusminus.component.css']
})
export class PlusminusComponent implements OnInit {
number:number=0
	constructor(private cs: ButtonService) { }

	ngOnInit(): void {
		this.number=this.cs.getNumber()
		}
		
		plusMe(number){
		this.cs.plus(this.number++)
		}

		minusMe(number){
		this.cs.minus(this.number--)
		}

}


