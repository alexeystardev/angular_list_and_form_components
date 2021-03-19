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

		// this.myNum.counter.subscribe((number)=>{
			// 	this.number=number;
			// })
			//this.number=this.myCounter.getPm()
		}
		
		save(color:string){
			console.log(color)
			this.cs.setColor(color)
		}
//   plusme(number:number){
// 	  console.log(this.number=this.counter.getNumber())
//     }
    
    // minus(num:number){
    //   return num-1;
    // }
}


