import { ProjectsService } from './db/projects.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from './showreel.model';

@Injectable()
export class ShowreelService {

  private projects: Project[] = [
    {
      id: 1,
      name: 'First App',
      category: 'Angular',
      description: `The website you are browsing currently is written using Angular. It started as Angular2, 
                and now continuesly growing with the frameworkas well.`,
      imagePath: '/route/to/image/1'
    },
    {
      id: 2,
      name: 'Whack A Mole Game',
      category: 'ES6',
      description: `Hit as much moles as you can and collect your prize! `,
      imagePath: '/route/to/image/2'
    },
  ];


  constructor(private http: Http,
              private projectService: ProjectsService // this will be redudant sooooon
             ) { }

  /*  Firebase  */

  storeProjects () {
    const url = 'https://civic-genre-139017.firebaseio.com/projects.json';
    this.http.post(url, this.projects);
  }

  /*  END of Firebase  */

  /* Local data */
  getProject (index: number) {
    return this.projects[index];
  }

  getProjects () {
    return this.projects.slice();
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
          // console.log(projects);
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

  addProject (project) {
    this.projects.push(project);
  }

  updateProject (index: number, newProject) {
    this.projects[index] = newProject;
  }
}

