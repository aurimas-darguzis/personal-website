import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProjectsService {

  constructor(private http: Http) {
   }

   storeProject() {
     return this.http.put('https://civic-genre-139017.firebaseio.com/projects.json', this.getProjects());
   }

   getData() {
     return;
    //  return this.http.put('https://civic-genre-139017.firebaseio.com/', )
   }

   getProjects() {
     return;
   }

}
