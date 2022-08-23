import {Component,Inject, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Posts} from "../posts/posts.component";


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  editCardTitle:string = "";
  editCardBody:string = "";

  @Input() editInput: any;
  // editCardTitle:string ="";
  // editCardBody:string = "";
  // constructor(public dialogRef:MatDialogRef<EditFormComponent>,
  //             @Inject(MAT_DIALOG_DATA) public data: Posts,
  //             ) {}
  // onNoClick():void{
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {

  }


  SaveChanges(){

    this.editCardTitle = this.editInput.cardTitle;
    this.editCardBody = this.editInput.cardBody;


  }
}


