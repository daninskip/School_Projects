import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {

  country: any = {};

  constructor (private apiService: ApiService){}

  setCountryData(event: any){
      this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.country = {
        ...data,
        countryID: event.target.getAttribute('id')
        
      }
    })
  }

  }
