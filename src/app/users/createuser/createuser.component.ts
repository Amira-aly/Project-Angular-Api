import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/model/users';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  Object = new users();  
  constructor(private ser:UserfunctionService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){
    return this.ser.post(this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_users')
    })
  }

}
