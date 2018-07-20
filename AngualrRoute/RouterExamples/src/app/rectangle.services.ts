import {Injectable} from '@angular/core'
@Injectable()
export class RecangleServices{
    calucalteArea(length:number,breadth:number)
    {
        return length*breadth;
    }
    calucaltePeimeter(length:number,breadth:number)
    {
        return 2*(length*breadth);
    }
}