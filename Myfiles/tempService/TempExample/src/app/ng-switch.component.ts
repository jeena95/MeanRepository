import {Component,OnInit} from '@angular/core';

@Component({
    selector:'ng-switch-example',
    template:`
    <h4>NgSwitch</h4>
    <ul *ngFor="let person of people"
    [ngSwitch]="person.country">
    <li *ngSwitchCase="'UK'">
    {{person.name}} ({{"United Kingdom"|titlecase}})
    </li>
    <li *ngSwitchCase="'US'">
    {{person.name}} ({{"United States of America"|titlecase}})
    </li>
    <li *ngSwitchDefault>
    {{person.name}} ({{person.country}})
    </li>
    </ul>
    `
})
export class  NgSwitchComponent implements OnInit{
    people:any[]=[
        {
            "name":"Ram",
            "age":35,
            "country":"UK"
        },
        {
            "name":"Raj",
            "age":32,
            "country":"US"
        },
        {
            "name":"john",
            "age":25,
            "country":"India"
        }
    ];
    ngOnInit() {
    }
  
}