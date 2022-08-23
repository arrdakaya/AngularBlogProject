import {Component, Input, OnInit} from '@angular/core';

import postData from '../../data/posts.json';



export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageId: number;
}



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  selectedPostData:any;

  title = 'pagination';
  page: number =1;
  count:number =0;
  tableSize:number=8;


  constructor() {}




  posts: Posts[] = postData;



  ngOnInit(): void {

  }

  selectedPost(postCard:any){
    this.selectedPostData = postCard;

  }

  onTableDataChange(event:any){
    this.page = event;

  }
}
