import {Injectable} from '@angular/core';
@Injectable()
export class EmployeeService
{

   getNetpay(basic:number)
   {
     if(basic<=5000)
     {
         var netpay=basic+0.3*basic-1000;
         return netpay;
     }
    else if(basic>5000)
     {
         var netpay=basic+0.4*basic-1000;
         return netpay;
     }
 
   }

}
   
