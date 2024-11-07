import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Welcome to Angular 17 Demo';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  name: string = '';

  @Input() parentMessage = '';
  @Output() childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  logMessage() {
    console.log('Button clicked!');
  }

  sendMessage() {
    this.childEvent.emit('Message from Child Component');
  }

}
