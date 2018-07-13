import{Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'summary'})
export class SummaryPipe implements PipeTransform{
    transform(str:string,n:number):string{
        let summary:string="";
        n=(n)?n:50;
        summary=str.substring(0,n)+".......";
        return summary;

    }
}