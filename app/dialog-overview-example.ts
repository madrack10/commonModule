import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CommonModelService } from './common-model.service'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  date1: any;
  date2: any;

  constructor(private commModel: CommonModelService) { }

  openDialog() {
    this.commModel.openDialog().subscribe(data =>      {
      console.log(data);
    });
  }
}
