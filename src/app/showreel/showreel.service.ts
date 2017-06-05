import { Injectable } from '@angular/core';

@Injectable()
export class ShowreelService {

  private project = {
    description: `The website you are browsing currently is written using Angular.
                  It started as Angular2, and now continuesly growing with the framework
                  as well. :)`
  };

  constructor() { }

  getProject () {
    return this.project;
  }

}
