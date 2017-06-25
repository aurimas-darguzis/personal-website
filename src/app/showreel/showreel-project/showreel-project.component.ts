import { Router, ActivatedRoute, Params } from '@angular/router';
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
  id: number;

  // projects: Project[] = [
  projects: any[] = [
    {
      id: 1,
      name: 'Angular 2',
      category: 'First App',
      description: `The website you are browsing currently is written using Angular. It started as Angular2, 
                and now continuesly growing with the frameworkas well.`,
      imagePath: '',
    },
    {
      id: 2,
      name: 'Whack A Mole Game',
      category: 'ES6',
      description: `Hit as much moles as you can and collect your prize! `,
      imagePath: '',
    },
  ];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onNewProject() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditProject() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit']);
  }
}
