import { ShowreelService } from './showreel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.css']
})
export class ShowreelComponent implements OnInit {
  private projects;

  tiles = [
    {text: 'Angular',   cols: 1, rows: 1, color: 'lightblue'},
    {text: 'React',   cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Vue',   cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Node',   cols: 1, rows: 1, color: 'lightblue'},
    // {text: 'One',   cols: 3, rows: 1, color: 'lightblue'},
    // {text: 'Two',   cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four',  cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
    this.projects = this.showreelService.getProject();
  }

  onSaveProject() {
    this.showreelService.saveProject();
  }

}
