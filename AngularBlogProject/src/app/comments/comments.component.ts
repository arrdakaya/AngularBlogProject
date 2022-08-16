import {Component, Input, OnInit} from '@angular/core';
import commentData from  "../../data/comments.json"



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comment = commentData;
  constructor() {
  }



  ngOnInit(): void {
  }

}
