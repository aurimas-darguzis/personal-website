import { Injectable } from '@angular/core';

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

  constructor() { }

  getProject () {
    return this.project;
  }

}
