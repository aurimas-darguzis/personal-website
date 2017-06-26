import { ShowreelService } from './../showreel.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../showreel.model';

@Component({
  selector: 'app-showreel-project',
  templateUrl: './showreel-project.component.html',
  styleUrls: ['./showreel-project.component.css']
})
export class ShowreelProjectComponent implements OnInit {
  // @Input() projecttt: Project[];
  // @Input() index: number;
  private projects: Project[];
  id: number;

  constructor(private showreelService: ShowreelService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit () {
    this.projects = this.showreelService.getProjects();

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //     }
    //   );
  }

  onNewProject () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDetails () {
    console.log('nothing has happened');
    return;
  }

  // onEditProject (id) {
  //   console.log(id);
    // this.router.navigate([`${id}/edit`], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit']);
  // }
}
