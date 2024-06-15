import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img class="listing-photo" src= {{housingLocationy.photo}} alt="Exterior photo of {{housingLocationy.name}}">
      <h2 class="listing-heading">{{housingLocationy.name}}</h2>
      <p class="listing-location">{{housingLocationy.city}}, {{housingLocationy.state}}</p>
      <p class="listing-location">Wifi: {{housingLocationy.wifi}}</p>
      <a [routerLink]="['/details', housingLocationy.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location-component.css']
})
export class HousingLocationComponent {
  @Input() housingLocationy!:HousingLocation;
}
