import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/model/users';
import { UserfunctionService } from 'src/app/services/userfunction.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  invalidMessage :any;
  Object = new users();  
  id: any;
  constructor(private ser:UserfunctionService, private router: Router,
    private activeRoute: ActivatedRoute
    ) {
      this.id = this.activeRoute.snapshot.paramMap.get('id')
      this.ser.getById(this.id).subscribe((data:any) =>{
        this.Object= data
      })
    }

  ngOnInit(): void {
  }

  send(name:any,email:any,adrress:any,phone:any,img:any):any{
    if(name.errors == null && email.errors == null  && adrress.errors == null  && phone.errors == null && img.errors == null){
      return this.ser.put(this.id,this.Object).subscribe(data=> {
        this.router.navigateByUrl('/all_users')
      })
    }else{
      this.invalidMessage = "This Input Is Required"
    }
  }

}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

