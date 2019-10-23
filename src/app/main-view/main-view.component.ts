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
  modalEvt;

  constructor(private mainData: CityJsonDataService) {
    this.mainData.getCities().subscribe(aData => {
      this.cityData = aData;
    });

    this.mainData.getEvents().subscribe(bData => {
      this.evtData = bData;
      //localStorage.clear()
      if(localStorage.getItem('mainData') != null) {
        this.evtData = JSON.parse(localStorage.getItem('mainData'))
      }
      this.runFunctions()
    });
  }

  async runFunctions() {
    await this.assignCity()
    await this.createTime()
    await this.isSigned();
  }

  //match the IDs in the event data with the IDs in the city data in order to display the city name
  assignCity() {
    console.log(this.cityData)
    console.log(this.evtData)
    for (let i = 0; i < this.evtData.length; i++) {
      for (let y = 0; y < this.cityData.length; y++) {
        if (this.evtData[i].city == this.cityData[y].id) {
          this.evtData[i]['cityName'] = this.cityData[y].name;
        }
      }
    }
  }

  // getCityName(cityId) {
  //   return this.cityData.find(city => city.id === cityId).name;
  // }

  createTime() {
    let fullDate = [];

    for (let i = 0; i < this.evtData.length; i++) {
      fullDate.push(this.evtData[i].startDate)
      for (let y = 0; y < fullDate.length; y++) {
        this.evtData[i]['time'] = fullDate[y].split('T')[1].slice(0, 5);
        this.evtData[i]['date'] = new Date(fullDate[y]).toDateString();
      }
    }
    //console.log(this.evtData);
  }
  
  isSigned() {
    let eventData = this.evtData;

    for (let i = 0; i < eventData.length; i++) {
      if(!eventData[i].hasOwnProperty('isSignedUp')) {
        eventData[i]['isSignedUp'] = false;
      }
    }
  }
}
