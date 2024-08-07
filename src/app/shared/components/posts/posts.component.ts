import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../models/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  posts !: Array<Iposts> 
  constructor(
    private _postService : PostsService
  ) { }

  ngOnInit(): void {
    this._postService.fetchAllPosts()
    .subscribe(res=>{
      console.log(res);   
      this.posts=res
    })
  }

}
