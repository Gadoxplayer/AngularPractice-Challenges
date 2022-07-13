import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-display-details',
    templateUrl: './display-details.component.html',
    styleUrls: ['./display-details.component.css']
})

export class DisplayDetailsComponent implements OnInit {
    paragraphVisibility: boolean = true;
    // placeholderVisibility: boolean = true;
    arrOfLog: Array<string> = [];
    countOfClicks: Array<number> = [];
    isPlus5: boolean = false;
    showingMessage: boolean = true;
    messageButton: string = 'Display details!!';

    constructor() {

    }
    
    onToggleVisibility(){
        this.paragraphVisibility = !this.paragraphVisibility;
        // this.placeholderVisibility = !this.placeholderVisibility;
        this.arrOfLog.push('Click!');
        this.countOfClicks.push(this.countOfClicks.length + 1);
        this.showingMessage = !this.showingMessage;
    }

    toChangeColorLog() {
        if(this.arrOfLog.length >=5)
           { this.isPlus5 = true}
        return this.isPlus5 ? 'blue' : '';
    }

    toChangeButtonText() {
        return this.messageButton = this.showingMessage ? 'Display details!!' : 'Hide details!!!!';
    }

    ngOnInit(): void {
        
    }
}