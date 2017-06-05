import { ShowreelService } from './../showreel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-first-app',
  templateUrl: './angular-first-app.component.html',
  styleUrls: ['./angular-first-app.component.css']
})
export class AngularFirstAppComponent implements OnInit {
  @Input() project;

  // private project: any;

  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
    console.log(this.project);
    this.project = this.showreelService.getProject();
  }

}
