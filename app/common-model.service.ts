import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { PupupFormComponent } from './pupup-form/pupup-form.component'

@Injectable()
export class CommonModelService {
  animal: string;
  name: string;
  date1: any;
  date2: any
  constructor(public dialog: MatDialog) { }
  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(PupupFormComponent, {
      width: '250px',
      data: {
        name: this.name, animal: this.animal, date1: this.date1, date2: this.date2,
        typeD: 'error',
        content: `<ng-container *ngFor="let x of data.status.message"><label [innerHtml]="x"></label>
                          </ng-container>` }
    });

    return dialogRef.afterClosed();
  }
}