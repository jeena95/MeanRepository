import {Component,OnInit} from '@angular/core';

@Component({
    selector:'ng-style-example',
    template:`
    <h4>NgStyle</h4>
    <ul *ngFor="let person of people">
    <li
    [ngStyle]="{'color':getColor(person.country)}">
    {{person.name}} ({{person.country}})
    </li>
   </ul>
    `
})

export class  NgStyleComponent implements OnInit{
    getColor(country){
        switch(country){
            case 'France':return 'green';
            case 'USA':return 'blue';
            case 'India':return 'red';
        }
    }
    people:any[]=[
        {
            "name":"Ram",
            "age":35,
            "country":'France'
        },
        {
            "name":"Raj",
            "age":32,
            "country":'USA'
        },
        {
            "name":"john",
            "age":25,
            "country":'India'
        }
    ];
    ngOnInit() {
    }
  
}