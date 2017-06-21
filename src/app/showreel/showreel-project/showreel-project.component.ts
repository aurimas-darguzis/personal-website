import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../showreel.model';

@Component({
  selector: 'app-showreel-project',
  templateUrl: './showreel-project.component.html',
  styleUrls: ['./showreel-project.component.css']
})
export class ShowreelProjectComponent implements OnInit {
  @Input() data: Project[];
  @Input() index: number;

  // project: Project = {
  //   name: '',
  //   category: '',
  //   image: '',
  //   description: ''
  // };

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
