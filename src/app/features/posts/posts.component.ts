import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[];

  constructor(private postsService: PostsService) {
  }

  public ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
  }

  public addPost(): void {
    console.log('Add post');
  }

  public removePost(post: Post): void {
    console.log('Remove post');
  }

}
