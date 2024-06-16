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
      <input type="text" placeholder="Filter by City" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let location of filteredLocationList" [housingLocationy]="location"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLoc) =>
      housingLoc?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
  filteredLocationList: HousingLocation[] = [];

  housingLocationList!: HousingLocation[];
  
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
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
