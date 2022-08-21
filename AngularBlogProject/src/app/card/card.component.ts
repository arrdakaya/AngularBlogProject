import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  postId:number = 0;

  @Input() postInput: any;

  constructor() { }

  ngOnInit(): void {}

  public selectedPost(postInput:any){
  this.postId = postInput.id;
  }
}
