import { Component, OnInit } from '@angular/core';
import { UserfunctionService } from 'src/app/services/userfunction.service';


@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  allData : any = [];
  constructor(private ser:UserfunctionService) { 
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
