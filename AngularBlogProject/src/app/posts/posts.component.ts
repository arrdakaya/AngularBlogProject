import { Component, OnInit } from '@angular/core';
import postData from '../../data/posts.json';

interface  Posts {
  userId: number;
  id:number;
  title: string;
  body:string;
  imageId:number;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  posts: Posts[] = postData;
  ngOnInit(): void {}



}
