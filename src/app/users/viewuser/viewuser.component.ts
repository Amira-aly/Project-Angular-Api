import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/model/users';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  id:any;
  user: users = new users;
  constructor(private ser : UserfunctionService,private router: Router,
    private activeRoute : ActivatedRoute ){
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.ser.getById(this.id).subscribe((data:any) => {
      this.user = data;
    })
  }

  ngOnInit(): void {
  }

  remove(id:any){
    this.ser.delete(id).subscribe(data => {
      this.router.navigateByUrl('/all_users')
    });
  }

}
