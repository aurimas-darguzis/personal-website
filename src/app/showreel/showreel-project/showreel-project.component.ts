import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../showreel.model';

@Component({
  selector: 'app-showreel-project',
  templateUrl: './showreel-project.component.html',
  styleUrls: ['./showreel-project.component.css']
})
export class ShowreelProjectComponent implements OnInit {
  @Input() projecttt: Project[];
  @Input() index: number;

  projects: Project[] = [{
    name: 'Angular 2',
    category: `The website you are browsing currently is written using Angular. It started as Angular2, 
               and now continuesly growing with the frameworkas well.`,
    imagePath: '',
    description: 'First App'
  }];

  constructor() { }

  ngOnInit() {
    // console.log(this.projects);
  }

}
