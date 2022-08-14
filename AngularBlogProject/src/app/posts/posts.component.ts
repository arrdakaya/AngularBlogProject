import { Component, OnInit } from '@angular/core';
import postData from '../../data/posts.json';
import userData from '../../data/users.json';
interface  Posts {
  userId: number;
  id:number;
  title: string;
  body:string;
  imageId:number;
}
interface Users {
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

interface Comments{
  postId:number;
  id:number;
  name:string;
  email:string;
  body:string;
  userId:number;

}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  constructor() { }
  users: Users[] = userData;
  posts: Posts[] = postData;

  ngOnInit(): void {

  }
viewProduct(post:any){
    this.posts = post;
}


}
