import {Component, Input, OnInit} from '@angular/core';
import userData from "../../data/users.json";
import commentData from "../../data/comments.json";


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
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postComment: any;

  constructor() {}
  ngOnInit(): void {}

  comments: Comments[] = commentData;
  users: Users[] = userData;



}
