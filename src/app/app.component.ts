import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularproject';
    @Input() menu:number
	ngOnInit():void {
	}

	showMenu(num:number){
		this.menu=num
	}
}
