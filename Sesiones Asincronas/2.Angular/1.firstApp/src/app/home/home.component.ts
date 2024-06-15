import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form action="">
      <input type="text" placeholder="Filter by City">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let location of housingLocationList" [housingLocationy]="location"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[]
  
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  
// readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
// housingLocatio: HousingLocation = {
//   id: 9999,
//   name: 'Test Home',
//   city: 'Test city',
//   state: 'ST',
//   photo: `/assets/example-house.jpg`,
//   availableUnits: 99,
//   wifi: true,
//   laundry: false,
// };
}
