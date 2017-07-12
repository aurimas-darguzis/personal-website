import { ShowreelService } from './../showreel.service';
import { Project } from '../showreel.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-first-app',
  templateUrl: './angular-first-app.component.html',
  styleUrls: ['./angular-first-app.component.css']
})
export class AngularFirstAppComponent implements OnInit {
  // @Input() project;

  private projects: Project[];

  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
    // this.project = this.showreelService.getProject();
    // this.showreelService.getProjectFromFirebase().subscribe(
    //   ((projects: Project[]) => {
    //     this.projects = projects;
    //     console.log(this.projects);
    //   })
    // );
    // console.log(this.project);
  }

}
