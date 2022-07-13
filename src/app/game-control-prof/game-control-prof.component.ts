import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control-prof',
  templateUrl: './game-control-prof.component.html',
  styleUrls: ['./game-control-prof.component.css']
})
export class GameControlProfComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  lastNumner = 0;

  constructor() {
 
   }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumner + 1);
      this.lastNumner++;
    }, 1000);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
