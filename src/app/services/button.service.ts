import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

number:number=0

	numberStatus = new BehaviorSubject<number>(this.number)
	
	constructor() { }

		getNumber(){
			return this.number
		}

		plus(number:number){
			this.numberStatus.next(number)
		}

		minus(number:number){
			this.numberStatus.next(number)
		}
}
