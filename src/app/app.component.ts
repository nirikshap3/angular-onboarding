import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular17-demo';

  messageFromParent = 'Hello from Parent';
  messageFromChild = '';

  // ViewChild
  @ViewChild(HomeComponent)
  homeComponent!: HomeComponent;

  ngAfterViewInit() {
    console.log(this.homeComponent.title);
  }

  receiveMessage($event: any) {
    this.messageFromChild = $event;
  }
}
