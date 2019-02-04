import { Component, OnInit } from '@angular/core';
import {  Email } from './email'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mail: Email = {
    id: 1,
    value: 'example.mail@gmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
