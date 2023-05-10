import { Component, Input, OnInit } from '@angular/core';
import { SalaryComponent } from 'src/app/shared/config/salary-component';

@Component({
  selector: 'app-employee-salary-structure',
  templateUrl: './employee-salary-structure.component.html',
  styleUrls: ['./employee-salary-structure.component.scss']
})
export class EmployeeSalaryStructureComponent implements OnInit {
  @Input() salary = 0;
  salaryBreakup = SalaryComponent;
  constructor() { }

  ngOnInit(): void {
    
  }

}
