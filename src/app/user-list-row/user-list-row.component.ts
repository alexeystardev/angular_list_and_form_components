import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-user-list-row]',
  templateUrl: './user-list-row.component.html',
  styleUrls: ['./user-list-row.component.css']
})
export class UserListRowComponent implements OnInit {

	constructor() { }

  @Input() index: number
 @Input() userName: string='test'
 @Input() lastName: string='test'

 @Output() onNewDelItem=new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.userName)
  }

  delete(index:number):void{
   
    this.onNewDelItem.emit(index)
  }

}
