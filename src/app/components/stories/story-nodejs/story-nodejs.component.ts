import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-nodejs',
  templateUrl: './story-nodejs.component.html',
  styleUrls: ['./story-nodejs.component.scss']
})
export class StoryNodejsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const code = 'const data = 1';
  }

}
