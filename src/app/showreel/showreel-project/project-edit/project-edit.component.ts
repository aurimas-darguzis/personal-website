import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { ShowreelService } from './../../showreel.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private router: Router,
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
    // const newProject = {
    //       'id': this.id,
    //       'name': this.projectForm.value['name'],
    //       'imagePath': this.projectForm.value['imagePath'],
    //       'description': this.projectForm.value['description'],
    //       'category': this.projectForm.value['category'],
    //     };
    if (this.editMode) {
      this.showreelService.updateProject(this.id, this.projectForm.value);
    } else {
      // this.showreelService.addProject(this.projectForm.value);
      this.showreelService.storeProject(this.projectForm.value)
        .subscribe((res: Response) => {
          console.log('stored!');
          this.router.navigate(['/showreel'], { relativeTo: this.route });
      });
    }
  }

  private initForm() {
    const projectName = '';
    const projectImagePath = '';
    const projectDescription = '';
    const projectCategory = '';

    if (this.editMode) {
      const project = this.showreelService.getProject(this.id).subscribe(res => console.log(res));
      // projectName = project.name;
      // projectImagePath = project.imagePath;
      // projectDescription = project.description;
      // projectCategory = project.category;

    }

    this.projectForm = new FormGroup({
      'name': new FormControl(projectName, Validators.required),
      'imagePath': new FormControl(projectImagePath, Validators.required),
      'description': new FormControl(projectDescription, Validators.required),
      'category': new FormControl(projectCategory, Validators.required)
    });
  }

  ngOnDestroy () {
  }


}
