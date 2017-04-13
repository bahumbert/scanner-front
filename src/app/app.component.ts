import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Scanner Hazeron 2.0';
  options = {
    position: ['top', 'right'],
    maxStack: 3,
    timeOut: 4000,
    showProgressBar: true
  };
}
