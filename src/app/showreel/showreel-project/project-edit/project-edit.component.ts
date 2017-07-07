import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ShowreelService } from './../../showreel.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../showreel.model';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnDestroy {
  id: number;
  project: Project;
  editMode = false;
  projectForm: FormGroup;
  categories = ['ES6', 'React', 'Angular', 'Vue'];

  constructor(private route: ActivatedRoute,
              private showreelService: ShowreelService) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            // check does it have an id
            this.editMode = params['id'] != null;
            this.initForm();
          }
        );
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  private initForm() {
    let projectName = '';
    let projectImagePath = '';
    let projectDescription = '';
    let projectTechnologies = new FormArray();

    if (this.editMode) {
      const project = this.showreelService.getProject(this.id);
      projectName = project.name;
      projectImagePath = project.imagePath;
      projectDescription = project.description;
    }

    this.projectForm = new FormGroup({
      'name': new FormControl(projectName),
      'imagePath': new FormControl(projectImagePath),
      'description': new FormControl(projectDescription)
    });
  }

  ngOnDestroy () {
  }


}
