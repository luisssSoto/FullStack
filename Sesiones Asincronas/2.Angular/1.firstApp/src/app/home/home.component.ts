import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  template: `
  <section>
  <form action="">
    <input type="text" placeholder="Filter by City">
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="results">
<app-housing-location></app-housing-location>
</section>
  `,
  styles: ``
})
export class HomeComponent {

}
