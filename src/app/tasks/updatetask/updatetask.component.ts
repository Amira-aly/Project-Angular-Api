import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tasks } from 'src/app/model/tasks';
import { TaskfunctionService } from 'src/app/services/taskfunction.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  Object = new tasks();  
  id:any;
  constructor(private ser:TaskfunctionService, private router: Router,
    private activeRoute: ActivatedRoute
    ) {
      this.id = this.activeRoute.snapshot.paramMap.get('id')
      this.ser.getById(this.id).subscribe((data:any) =>{
        this.Object = data
      })
     }

  ngOnInit(): void {
  }

  send(){
    return this.ser.put(this.id, this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_tasks')
    })
  }

}
