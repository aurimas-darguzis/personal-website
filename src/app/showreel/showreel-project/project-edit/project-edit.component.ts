import { NgForm, FormGroup } from '@angular/forms';
import { ShowreelService } from './../../showreel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../showreel.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  subscription: Subscription;
  project: Project;
  id: number;
  editMode = false;
  projectForm: FormGroup;
  categories = ['ES6', 'React', 'Angular', 'Vue'];

  constructor(private route: ActivatedRoute,
              private showreelService: ShowreelService) { }

  ngOnInit() {
    this.showreelService.startedEditing.subscribe();
    /*
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // check does it have an id
          this.editMode = params['id'] != null;
         // this.project = this.showreelService.getProject(this.id);
        }
      );
    */
  }



  onAddProject(form: NgForm) {
    const value = form.value;
    const newProject = {
      id: 3,
      name: value.name,
      description: value.description,
      imagePath: value.imagePath,
      project: value.project
    };
    this.showreelService.addProject(newProject);
  }


}
