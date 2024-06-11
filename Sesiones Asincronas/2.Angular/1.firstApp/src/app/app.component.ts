import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Hello World!</h1>
    <p> This paragraph was maden from &#64;Component </p>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
