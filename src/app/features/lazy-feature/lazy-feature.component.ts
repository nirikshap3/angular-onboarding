import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lazy-feature',
  templateUrl: './lazy-feature.component.html',
  styleUrls: ['./lazy-feature.component.scss']
})
export class LazyFeatureComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
