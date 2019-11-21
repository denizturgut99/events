import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  @Input() eventData;
  modalEvt;

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleEventStatus(e) {
    this.modalEvt = Array(e)
  }

  changeSignedUpStatus() {
    let modalData = this.modalEvt;
    let events = this.eventData;

    modalData.forEach(modal => {
      modal.isSignedUp = this.getEventsData(modal.id);

      if (modal.isSignedUp == false) {
        modal.isSignedUp = true;
      }
      else if (modal.isSignedUp == true) {
        modal.isSignedUp = false;
      }
    });

    this.eventData = events;
    localStorage.setItem('mainData', JSON.stringify(this.eventData));
  }

  getEventsData(event) {
    return this.eventData.find(evt => evt.id == event).isSignedUp;
  }

}
