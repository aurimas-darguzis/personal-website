import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogBoxComponent } from './../material-components/dialog-box/dialog-box.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedOption: string;
  title = 'Darguzis';

  constructor(public dialog: MdDialog) { }

  openDialog () {
    const dialogRef = this.dialog.open(DialogBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {
  }

}
