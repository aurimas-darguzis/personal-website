import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import { ShowreelService } from './../showreel.service';
import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../showreel.model';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-showreel-project',
  templateUrl: './showreel-project.component.html',
  styleUrls: ['./showreel-project.component.css']
})
export class ShowreelProjectComponent implements OnInit {

  projects: FirebaseListObservable<Project[]>;
  id: number;

  constructor(private showreelService: ShowreelService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit () {
    this.projects = this.showreelService.getProjectsList();
  }

  deleteProject (key: string) {
    this.projects.remove(key);
  }

  showAddOption () {
    const addButton = document.querySelector('.new-project');
    addButton.classList.remove('hidden');
  }

  onNewProject () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDetails () {
    console.log('on details');
    return;
  }

  onEditProject (id: any) {
    // this.showreelService.getProject(id);
    this.router.navigate([`${id}/edit`], {relativeTo: this.route});
  }

  storeProjects () {
    // subscribe in component to show errors/success message in UI
    // this.showreelService.storeProjects(null).subscribe(
    //   (response: Response) => {
    //     console.log(response);
    //   });
  }

  getProjects () {
    // this.showreelService.getProjects().subscribe(
    //   (response: Response) => {
    //     console.log(response);
    //    this.projects.push(response.json());
    //   });
  }
}
