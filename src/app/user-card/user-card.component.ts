import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  	cardsPics = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200'];
//   img="https://picsum.photos/200"
  ngOnInit(): void {
  }

}
