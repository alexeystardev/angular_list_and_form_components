import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(email,password) {
	  document.getElementById('emailVal').innerText=email.value
	  document.getElementById('passwordVal').innerText=password.value
	}

}
