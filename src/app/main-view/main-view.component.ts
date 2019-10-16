import { CityJsonDataService } from './../city-json-data.service';
import { Component } from '@angular/core';

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
      if(localStorage.getItem('mainData') != null) {
        this.evtData = JSON.parse(localStorage.getItem('mainData'))
      }
      this.runFunctions()
    });
  }

  async runFunctions() {
    await this.assignCity()
    await this.createTime()
    await this.sortByDate()
    await this.isSigned();
  }

  //match the IDs in the event data with the IDs in the city data in order to display the city name
  assignCity() {
    for (let i = 0; i < this.evtData.length; i++) {
      for (let y = 0; y < this.cityData.length; y++) {
        if (this.evtData[i].city == this.cityData[y].id) {
          this.evtData[i]['cityName'] = this.cityData[y].name;
        }
      }
    }
  }

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

  sortByDate() {
    let eventData = this.evtData;

    function sortDate(array, key) {
      return array.sort((a, b) => {
        let x = a[key];
        let y = b[key];
        if(x > y) {
          return 1;
        } else if (x < y) {
          return -1;
        } else {
          return 0;
        }
      }) 
    }
    this.evtData = sortDate(eventData, "startDate")
  }

  joinEvent(e) {
    this.modalEvt = Array(e)
  }

  isSigned() {
    let eventData = this.evtData;

    for (let i = 0; i < eventData.length; i++) {
      if(!eventData[i].hasOwnProperty('isSignedUp')) {
        eventData[i]['isSignedUp'] = false;
      }
    }
  }

  signUpEvt() {
    let modalData = this.modalEvt;
    let events = this.evtData;

    for(let i = 0; i < modalData.length; i++) {
      for(let y = 0; y < events.length; y++) {
        if(modalData[i].id == events[y].id) {
          if(events[y]['isSignedUp'] == false) {
            events[y]['isSignedUp'] = true;
          }
        }
      }
    }
    this.evtData = events;
    localStorage.setItem('mainData', JSON.stringify(this.evtData));
  }
}
