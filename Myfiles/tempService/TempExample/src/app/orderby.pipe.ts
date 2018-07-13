import {Pipe,PipeTransform } from '@angular/core';
@Pipe({name: 'orderBy'})
export class orderByPipe implements PipeTransform {
    transform(a:any, option:boolean): any {
        option = (option == true) ? true : false;
        let sorted:any;
        if(option){
             sorted = a.sort().reverse();
        }
        else {
            sorted = a.sort();
        }
        return sorted;
    }
}