import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/app/model/posts';
import { PostfunctionService } from 'src/app/services/postfunction.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  id:any;
  post = new posts;
    constructor(private ser : PostfunctionService,private router: Router,
    private activeRoute : ActivatedRoute ){
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.ser.getById(this.id).subscribe((data:any) => {
      this.post = data;
    })
  }

  ngOnInit(): void {
  }

  remove(id:any){
    this.ser.delete(id).subscribe(data => {
      this.router.navigateByUrl('/all_posts')
    });
  }

}
