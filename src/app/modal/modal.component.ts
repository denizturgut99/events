import { CityJsonDataService } from './../city-json-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modalEvt;
  @Input() eventData;

  constructor(private router: Router) {  }

  changeSignedUpStatus() {
    let modalData = this.modalEvt;
    let evtData = this.eventData;

    modalData.forEach(modal => {
      modal.isSignedUp = this.getEventsData(modal.id);

      if (modal.isSignedUp == false) {modal.isSignedUp = true;}
      else if (modal.isSignedUp == true) {modal.isSignedUp = false;}
    });
    this.eventData = evtData;
    localStorage.setItem('mainData', JSON.stringify(this.eventData))
  }

  getEventsData(input) {
    return this.eventData.find(event => event.id == input).isSignedUp;
  }

}
