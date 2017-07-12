import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import { ShowreelService } from './../showreel.service';
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
  // private projects: Project[];
  private projects: any[] = [];
  id: number;

  constructor(private showreelService: ShowreelService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit () {
   // this.getProjects();
   this.showreelService.getProjects()
    .subscribe(project => {
      this.projects.push(project);
      console.log(this.projects);
    });
  }

  showAddOption () {
    const addButton = document.querySelector('.new-project');
    addButton.classList.remove('hidden');
  }

  onNewProject () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDetails () {
    console.log('nothing has happened');
    return;
  }

  onEditProject (index: number) {
   // this.router.navigate([`${id}/edit`], {relativeTo: this.route});
   // this.showreelService.startedEditing.next(index);
  }

  storeProjects () {
    // subscribe in component to show errors/success message in UI
    this.showreelService.storeProjects(null).subscribe(
      (response: Response) => {
        console.log(response);
      });
  }

  getProjects () {
    this.showreelService.getProjects().subscribe(
      (response: Response) => {
        console.log(response);
        this.projects.push(response.json());
      });
  }
}
