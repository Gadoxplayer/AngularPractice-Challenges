import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-prof',
  templateUrl: './odd-prof.component.html',
  styleUrls: ['./odd-prof.component.css']
})
export class OddProfComponent implements OnInit {
  @Input() number:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
