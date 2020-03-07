import { CityJsonDataService } from './../city-json-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  cityData;
  evtData;

  constructor(private mainData: CityJsonDataService) {
    this.mainData.getCities().subscribe(cities => {
      this.cityData = cities;
    });

    this.mainData.getEvents().subscribe(events => {
      //localStorage.clear()
      if (localStorage.getItem('mainData') != null) {
        this.evtData = JSON.parse(localStorage.getItem('mainData'));
        console.log(this.evtData)
      } else {
        this.evtData = events;
        console.log(this.evtData)
      }
      this.runFunctions();
    });
  }

  async runFunctions() {
    await this.assignCity()
    await this.createTime()
    await this.isSigned();
  }

  //match the IDs in the event data with the IDs in the city data in order to display the city name
  assignCity() {
    this.evtData.forEach(event => {
      event['cityName'] = this.getCityName(event.city);
    });
  }

  getCityName(cityId) {
    return this.cityData.find(city => city.id == cityId).name;
  }

  createTime() {
    let fullDate = [];

    this.evtData.forEach(event => {
      fullDate.push(event.startDate);

      fullDate.forEach(date => {
        event['time'] = date.split('T')[1].slice(0, 5);
        event['date'] = new Date(date).toDateString();
      });
    });
  }

  isSigned() {
    let eventData = this.evtData;

    eventData.forEach(data => {
      if (!data.hasOwnProperty('isSignedUp')) {
        data['isSignedUp'] = false;
      }
    });
  }
}
