import { Component, OnInit } from '@angular/core';
import { PostfunctionService } from 'src/app/services/postfunction.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {

  allData : any = [];
  constructor(private ser:PostfunctionService) { 
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
