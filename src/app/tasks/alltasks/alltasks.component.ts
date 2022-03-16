import { Component, OnInit } from '@angular/core';
import { TaskfunctionService } from 'src/app/services/taskfunction.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  allData : any = [];
  constructor(private ser:TaskfunctionService) { 
    this.ser.get().subscribe((data: any)=>{
      this.allData = data;
    })
  }

  ngOnInit(): void {
  }

  remove(id:any){
    this.ser.delete(id).subscribe(data => {
      location.reload();
    });
  }

}
