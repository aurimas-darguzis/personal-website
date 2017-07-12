import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from './showreel.model';

@Injectable()
export class ShowreelService {

  private basePath = '/projects';

  projects: FirebaseListObservable<Project[]> = null; // list of projects
  project: FirebaseObjectObservable<Project> = null; // single project

  constructor(private db: AngularFireDatabase) { }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getProjectsList (query = {}): FirebaseListObservable<Project[]> {
    this.projects = this.db.list('/projects', {
      query: query
    });
    return this.projects;
  }

  // Return a single observable item
  getProject (key: string): FirebaseObjectObservable<Project> {
    const projectPath = `${this.basePath}/${key}`;
    this.project = this.db.object(projectPath);
    return this.project;
  }

  // Create new project
  createProject (project: Project): void {
    this.db.list('/projects').push(project)
      .catch(error => this.handleError(error));
  }

  // Update an existing project
  updateProject (key: string, value: any): void {
    this.projects.update(key, value)
      .catch(error => this.handleError(error));
  }

  // Delete a single project
  deleteProject (key: string): void {
    this.projects.remove(key)
      .catch(error => this.handleError(error));
  }

  // Delete all projects
  deleteAll (): void {
    this.projects.remove()
      .catch(error => this.handleError(error));
  }


  // Default error handling for all actions
  private handleError (error) {
    console.error(error);
  }

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

