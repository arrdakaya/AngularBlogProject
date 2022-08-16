<<<<<<< HEAD
<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import commentData from  "../../data/comments.json"



=======
=======
>>>>>>> parent of 49260e5 (BeforeBroke)
import { Component, OnInit } from '@angular/core';
import userData from '../../data/users.json';
import commentData from '../../data/comments.json';
import postData from "../../data/posts.json";
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
<<<<<<< HEAD
>>>>>>> parent of 49260e5 (BeforeBroke)
=======
>>>>>>> parent of 49260e5 (BeforeBroke)
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  @Input() comment = commentData;
  constructor() {
  }



=======
=======
>>>>>>> parent of 49260e5 (BeforeBroke)
  constructor() { }
  users: Users[] = userData;
  posts: Posts[] = postData;
  comments: Comments[] = commentData;
<<<<<<< HEAD
>>>>>>> parent of 49260e5 (BeforeBroke)
=======
>>>>>>> parent of 49260e5 (BeforeBroke)
  ngOnInit(): void {
  }

}
