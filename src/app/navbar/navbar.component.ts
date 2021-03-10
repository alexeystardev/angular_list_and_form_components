import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 @Input() num: number

  constructor() { }

 @Output() menuChange=new EventEmitter<number>();

  ngOnInit(): void {
  }
 	activeMenu(num){
		this.menuChange.emit(num)
		console.log(num)
	}
}
