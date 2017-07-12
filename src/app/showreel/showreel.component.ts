import { ShowreelService } from './showreel.service';
import { Project } from './showreel.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.css']
})
export class ShowreelComponent implements OnInit {
  private projects: Project[];

  constructor(private showreelService: ShowreelService) { }

  ngOnInit() {
  }
}
