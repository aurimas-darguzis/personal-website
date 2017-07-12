import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from './showreel.model';

@Injectable()
export class ShowreelService {

  private basePath = '/projects';

  constructor() { }



  /* ::: Firebase playground :::

    getProjects () {
      return this.http.get('')
        .map((res: Response) => {
          return res.json();
        });
    }

    storeProjects (project) {
      return this.http.put(this.url, project);
    }

    storeProject (project) {
      return this.http.post(this.url, project);
    }


    getProject (id: number) {
      return this.http.get(this.url + `/${id}`);
    }

  */

  /*  END of Firebase  */

  /* ::: Local data playground :::

    getProjectLocally (index: number) {
      return this.projects[index];
    }

    getProjectsLocaly () {
      return this.projects.slice();
    }

    getProjectFromFirebase () {
      return this.http.get(this.url)
        .map(
          (response: Response) => {
            const projects: Project[] = new Array(response.json());
            return projects;
          }
        );
    }

    addProject (project) {
      this.projects.push(project);
    }

    updateProject (index: number, newProject) {
      this.projects[index] = newProject;
    }
  */
}

