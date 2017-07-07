import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
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

  project: Project;
  id: number;
  categories = ['ES6', 'React', 'Angular', 'Vue'];

  constructor(private route: ActivatedRoute,
              private showreelService: ShowreelService) { }

  ngOnInit() {
    // this stuff was for the template driven forms
     /*
        this.subscription = this.showreelService.startedEditing
          .subscribe(
            (index: number) => {
              this.editedItemIndex = index;
              this.editMode = true;
              this.editedProject = this.showreelService.getProject(index);
              this.projectForm.setValue({
                id: this.editedProject.id,
                name: this.editedProject.name,
                description: this.editedProject.description,
                imagePath: this.editedProject.imagePath
              });
            }
          );
      */
    /*
    // this I can't recall the use case
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

  ngOnDestroy () {
  }


}
