import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.css']
})
export class InputUsernameComponent implements OnInit {
  username: string = '';
  allowclick: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  resetUsername () {
    this.username = '';
  }
}
