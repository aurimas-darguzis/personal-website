import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  selectedOption: string;

  constructor(public dialog: MdDialog) { }

  openDialog () {
    const dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.selectedOption = result;
    })
  }

  ngOnInit() {
  }

  someModalShoudlOpen () {
    console.log('yep, some modal just opened. :D');
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
