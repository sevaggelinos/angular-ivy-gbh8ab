import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular (SVG) ' + VERSION.major;
  surname = 'zzzz (SVG) ' + VERSION.major;
}
