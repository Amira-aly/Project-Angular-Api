import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tasks } from 'src/app/model/tasks';
import { TaskfunctionService } from 'src/app/services/taskfunction.service';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  id:any;
  task: tasks = new tasks;
  constructor(private ser : TaskfunctionService,private router: Router,
    private activeRoute : ActivatedRoute ){
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.ser.getById(this.id).subscribe((data:any) => {
      this.task = data;
    })
  }

  ngOnInit(): void {
  }

  remove(id:any){
    this.ser.delete(id).subscribe(data => {
      this.router.navigateByUrl('/all_tasks')
    });
  }

}
