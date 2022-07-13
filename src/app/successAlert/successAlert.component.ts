import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-success-alert',
    templateUrl: './successAlert.component.html',
    styleUrls: ['./successAlert.component.css']
})
export class SuccessAlertComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
//OnInit : ngOnInit is component's life cycle hook which runs first after constructor(default method) when the component is being initialized. So, Your constructor will be called first and Oninit will be called later after constructor method.