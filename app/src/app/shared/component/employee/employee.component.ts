import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeList: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDepartmentWithAssociatedEmployees().subscribe(res => {
      if(res.isSuccess) {
        console.log(res.payload);
        // this.employeeList = res.payload;
        let departmentList1 = res.payload;
        departmentList1 =  departmentList1.filter(function (el: { isActive: number; }) {
          return el.isActive == 1;
      });
        for(let i in departmentList1)
        {
            let employee = departmentList1[i].employeeCollection;
            let obj={
              name:departmentList1[i].name,
              isActive:1,
              employeeCollection:''
            }
            obj.employeeCollection =  employee.filter(function (el: { isActive: number; }) {
              return el.isActive == 1;
          });
            console.log(obj);
            this.employeeList.push(obj);
        }
      }
    });
  }

}
