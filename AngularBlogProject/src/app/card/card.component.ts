import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {



  @Input() postInput: any;
  @Output() selectedCard:EventEmitter<any> = new EventEmitter()





  ngOnInit(): void {
    this.selectedCard.emit(this.postInput)
  }

  public selectedPost(postInput:any){
  this.selectedCard.emit(postInput);

  }

}
