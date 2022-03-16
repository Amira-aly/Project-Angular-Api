import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/app/model/posts';
import { PostfunctionService } from 'src/app/services/postfunction.service';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  [x: string]: any;

  Object = new posts();  
  id : any;
  constructor(private ser:PostfunctionService, private router: Router,
    private activeRoute: ActivatedRoute
    ) {
      this.id = this.activeRoute.snapshot.paramMap.get('id')
      this.ser.getById(this.id).subscribe((data:any) =>{
        this.Object=data
      })
     }

  ngOnInit(): void {
  }

  send(){
    return this.ser.put(this.id, this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_posts')
    })
  }

}
