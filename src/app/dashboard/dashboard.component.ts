import { Component, OnInit } from '@angular/core';
import { UserfunctionService } from '../services/userfunction.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    allData : any = [];
  constructor(private ser:UserfunctionService) { 
    this.ser.get().subscribe((data: any)=>{
      this.allData = data;
    })
  }

  ngOnInit(): void {
  }

  

}
