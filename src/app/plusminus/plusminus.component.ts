import { Component, Input, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-plusminus',
  templateUrl: './plusminus.component.html',
  styleUrls: ['./plusminus.component.css']
})
export class PlusminusComponent implements OnInit {

	constructor(private cs: ButtonService) { }

	ngOnInit(): void {
		}
		
		plusMe(number){
		this.cs.plus(this.cs.number++)
		}

		minusMe(number){
		this.cs.minus(this.cs.number--)
		}

}


