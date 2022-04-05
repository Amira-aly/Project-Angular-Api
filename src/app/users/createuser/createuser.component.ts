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

  invalidMessage :any;
  Object = new users();  
  constructor(private ser:UserfunctionService, private router: Router) { }

  ngOnInit(): void {
  }

  send(name:any,email:any,adrress:any,phone:any,img:any):any{
    if(name.errors == null && email.errors == null  && adrress.errors == null  && phone.errors == null && img.errors == null){
      return this.ser.post(this.Object).subscribe(data=> {
        this.router.navigateByUrl('/all_users')
      })
    }else{
      this.invalidMessage = "This Input Is Required"
    }
  }

}
