import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogBox } from './../material-components/dialog-box/dialog-box.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  selectedOption: string;

  constructor(public dialog: MdDialog) { }

  openDialog () {
    const dialogRef = this.dialog.open(DialogBox);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.selectedOption = result;
    })
  }

  ngOnInit() {
  }

}

