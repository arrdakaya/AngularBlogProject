import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  editCardTitle:string = "";
  editCardBody:string= "";

  @Input() editInput: any;

  constructor() { }

  ngOnInit(): void {

  }
  SaveChanges(){

    this.editCardTitle = this.editInput.cardTitle;
    this.editCardBody = this.editInput.cardBody;


  }
}
