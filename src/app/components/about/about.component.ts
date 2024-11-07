import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('AboutComponent Initialized');
  }

  ngOnDestroy() {
    console.log('AboutComponent Destroyed');
  }

}
