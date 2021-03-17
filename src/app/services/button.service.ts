import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

number: number=0;
counter = new BehaviorSubject<number>(this.number)

  constructor() { }

  getPm(){
	return this.number;
  }

    plus(num:number){
      return num+1;
    }
    
    minus(num:number){
      return num-1;
    }
}
