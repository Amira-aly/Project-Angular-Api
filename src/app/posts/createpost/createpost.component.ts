import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from 'src/app/model/posts';
import { PostfunctionService } from 'src/app/services/postfunction.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  Object = new posts();  
  constructor(private ser:PostfunctionService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){

    return this.ser.post(this.Object).subscribe(data=> {
      this.router.navigateByUrl('/all_posts')
    })
  }

}
