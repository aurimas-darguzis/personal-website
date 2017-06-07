import { ShowreelService } from './showreel.service';
import { Project } from './showreel.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.css']
})
export class ShowreelComponent implements OnInit {
  private projects;
  private firebaseProject;


  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
    // this.projects = this.showreelService.getProject();
    // this.projects = new Array(this.showreelService.getProjectFromFirebase());
  }

  onSaveProject() {
    this.showreelService.getProjectFromFirebase()
      .subscribe(
        (response: any) => {
          // console.log(response);
          this.firebaseProject = response;
        }
      );
  }
}
