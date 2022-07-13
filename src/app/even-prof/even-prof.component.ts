import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-prof',
  templateUrl: './even-prof.component.html',
  styleUrls: ['./even-prof.component.css']
})
export class EvenProfComponent implements OnInit {
  @Input() number: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
