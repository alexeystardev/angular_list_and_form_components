import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

constructor() { }
	email="alexey@google.com"
	phone="0543000000"
	userNames = ['Alexey', 'Shlomi', 'Avi', 'Ibrahim'];
  ngOnInit(): void {
  }

  deleteItem(index:number){
    console.log(index+"!!!")
    this.userNames.splice(index,1);
  }

}
