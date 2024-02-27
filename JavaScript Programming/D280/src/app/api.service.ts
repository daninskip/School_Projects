import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(country: string) {
    let api = 'http://api.worldbank.org/v2/country/' + country + '?format=json';

    return this.http.get(api)
  }

  setCountryData(country: string) {
    let subject = new Subject();

    this.fetchCountryData(country).subscribe((data:any) => {
      
      subject.next({        
        country: data[1][0].name,
        capitalCity: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude,
        flag: "https://flagsapi.com/" + data[1][0].iso2Code + "/flat/64.png"
      })

    })
    
    return subject.asObservable();
    
  }

}
