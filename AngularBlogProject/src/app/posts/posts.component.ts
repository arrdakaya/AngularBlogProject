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



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'pagination';
  page: number =1;
  count:number =0;
  tableSize:number=8;


  constructor() {

  }
  cardId:number = 0;
  cardBody:string = "";
  cardUserId:number = 0;
  cardTitle:string = "";
  cardImageId:number = 0;

  posts: Posts[] = postData;



  ngOnInit(): void {

  }

  selectedPost(postCard:any){
    this.cardId = postCard.id;
    this.cardBody = postCard.body;
    this.cardUserId = postCard.userId;
    this.cardTitle = postCard.title;
    this.cardImageId = postCard.imageId;

  }

  onTableDataChange(event:any){
    this.page = event;

  }
}
