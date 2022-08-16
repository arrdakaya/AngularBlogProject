import {Component, Input, OnInit} from '@angular/core';
import postData from '../../data/posts.json';
import userData from '../../data/users.json';
import commentData from '../../data/comments.json';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageId: number;
}

export interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  userId: number;

}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // @Input() post: {postId:number,postUserId:number,postTitle:string,postBody:string,postImageId:number}

  title = 'pagination';
  page: number =1;
  count:number =0;
  tableSize:number=8;


  postId: number = 0;
  postUserId: number = 0;
  postTitle: string = "";
  postBody: string = "";
  postImageId: number = 0;


  constructor() {

  }

  users: Users[] = userData;
  posts: Posts[] = postData;
  comments: Comments[] = commentData;


  public selectedPost(post: any) {

    this.postId = post.id;
    this.postUserId = post.userId;
    this.postTitle = post.title;
    this.postBody = post.body;
    this.postImageId = post.imageId;


  }

  ngOnInit(): void {

  }

  onTableDataChange(event:any){
    this.page = event;

  }
}
