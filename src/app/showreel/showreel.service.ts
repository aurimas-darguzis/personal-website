import { ProjectsService } from './db/projects.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from './showreel.model';


@Injectable()
export class ShowreelService {

  private project = [{
    name: 'First app',
    category: 'Angular 2+',
    image: 'assets/img/showreel/girl-640-min.jpg',
    description: `The website you are browsing currently is written using Angular.
                  It started as Angular2, and now continuesly growing with the framework
                  as well. :)`
  }];


  constructor(private http: Http , private projectService: ProjectsService) { }

  getProject () {
    return this.project;
  }

  getProjectFromFirebase () {
    return this.http.get('https://civic-genre-139017.firebaseio.com/projects.json')
      .map(
        (response: Response) => {
          const projects: Project[] = new Array(response.json());
          // for (const project of projects) {
          //   if (!project['description']) {
          //     project['description'] = '';
          //   }
          // }
          console.log(projects);
          return projects;
        }
      );
      // .subscribe(
      //   (projects: Project[]) => {
      //     console.log(projects);
      //     // this.showReelService.setProjects(projects);
      //     // this.saveProject(projects);
      //   }
      // );
  }

  saveProject (projects) {
    return this.projectService.storeProject();
  }



}

