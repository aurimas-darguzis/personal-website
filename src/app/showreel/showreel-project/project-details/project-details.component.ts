import { ShowreelService } from './../../showreel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../showreel.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  id: number;

  constructor(private showreelService: ShowreelService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.showreelService.getProject(this.id);
          // this.showreelProject = this.showreelService.getProjectFromFirebase(this.id);
        }
      );
  }
}
