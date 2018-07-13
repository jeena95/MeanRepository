import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  basicPay:number;
  netPay:number;
  employee:EmployeeService;
  constructor(employee:EmployeeService) {
    this. employee=employee;
  }
  getNetpay(){
    this.netPay=this.employee.getNetpay(this.basicPay);
    return this.netPay;
  }
  ngOnInit() {
  }

}
