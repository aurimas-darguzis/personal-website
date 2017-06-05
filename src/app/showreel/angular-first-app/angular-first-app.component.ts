import { ShowreelService } from './../showreel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-first-app',
  templateUrl: './angular-first-app.component.html',
  styleUrls: ['./angular-first-app.component.css']
})
export class AngularFirstAppComponent implements OnInit {

  private project: any;

  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
    this.project = this.showreelService.getProject();
  }

}
