import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  countNumber: number = 0;
  refInterval: NodeJS.Timeout | undefined;
  
  constructor() {
    this.refInterval = undefined;
  }

  ngOnInit(): void {
  }

  numberUp() {
    if(!this.refInterval){
      this.refInterval = setInterval(() => (this.countNumber = this.countNumber + 1), 1000);
    }
  }
  numberStop() {
    clearInterval(this.refInterval)
    this.refInterval = undefined;
  }

}
