import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tasks } from 'src/app/model/tasks';
import { TaskfunctionService } from 'src/app/services/taskfunction.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  Object = new tasks();  
  constructor(private ser:TaskfunctionService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){
    return this.ser.post(this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_tasks')
    })
  }

}
