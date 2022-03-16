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

  send(){
    return this.ser.put(this.id,this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_users')
    })
  }

}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

