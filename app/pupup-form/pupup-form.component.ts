import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
  date1: Date,
  date2: Date
}

@Component({
  selector: 'app-pupup-form',
  templateUrl: './pupup-form.component.html',
  styleUrls: ['./pupup-form.component.css'],
  providers: [MatDialogModule]
})
export class PupupFormComponent implements OnInit {
  animal: string;
  name: string;
  date1: string;
  date2 : string;
 
  ngOnInit() {

  }

  constructor(
    public dialogRef: MatDialogRef<PupupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(this.data)
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}