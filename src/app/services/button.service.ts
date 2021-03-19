import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

	color: string='black';
colorStatus = new BehaviorSubject<string>(this.color)
	
	constructor() { }

  getColor(){
	return this.color
  }

  setColor(color:string){
		this.colorStatus.next(color)
  }

    // plus(number:number){
    //   return number+1;
    // }
    
    // minus(num:number){
    //   return num-1;
    // }
}
