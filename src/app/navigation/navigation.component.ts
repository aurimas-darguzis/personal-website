import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  someModalShoudlOpen () {
    console.log('yep, some modal just opened. :D');
  }

  // sorting algorith. Nothing to do with this app
  insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] < nums[j]) {
          // take out one element from array at index i
          const spliced = nums.splice(i, 1);
          // insert element
          nums.splice(j, 0, spliced[0]);
        }
      }
    }
  }

}
