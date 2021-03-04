import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-row',
  templateUrl: './user-list-row.component.html',
  styleUrls: ['./user-list-row.component.css']
})
export class UserListRowComponent implements OnInit {

	constructor() { }
 		@Input() userName;

	 ngOnInit(): void {
  }

}
