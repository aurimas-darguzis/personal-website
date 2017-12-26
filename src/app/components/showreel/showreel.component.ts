import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.css']
})
export class ShowreelComponent implements OnInit {

  constructor(private router: Router) {
    // const snapshot = router.routerState.snapshot;
    // console.log(snapshot);
  }

  ngOnInit() {
  }

}
