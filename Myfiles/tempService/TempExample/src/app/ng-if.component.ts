import {Component,OnInit} from '@angular/core';

@Component({
    selector:'ng-if-example',
    template:`
    <h4>NgIf</h4>
    <ul *ngFor="let person of people">
    <li *ngIf="person.age <=30">
    {{person.name}} ({{person.age}})
    </li>
    </ul>
    `
})
export class  NgIfComponent implements OnInit{
    people:any[]=[
        {
            "name":"Ram",
            "age":35
        },
        {
            "name":"Raj",
            "age":32
        },
        {
            "name":"john",
            "age":25
        }
    ];
    ngOnInit() {
    }
  
}