import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-material-dialog-box',
  templateUrl: './dialog-box.component.html'
})

export class DialogBoxComponent {
  constructor(public dialogRef: MdDialogRef<DialogBoxComponent> ) {}

  log () {
    console.log('close');
    this.dialogRef.close();
  }

  send () {
    console.log('thank you! :) I will get back to you shortly');
    this.dialogRef.close();
  }
}
