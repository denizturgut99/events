import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-events-body',
  templateUrl: './display-events-body.component.html',
  styleUrls: ['./display-events-body.component.css']
})
export class DisplayEventsBodyComponent {

  @Input() eventData;
  modalEvt;
  timeoutEvent;
  lastJoinedEvent;
  isVisibleSection = false;
  firstName = "";
  lastName = "";

  constructor(private router: Router) {
    
    if(localStorage.getItem("firstName") != null && localStorage.getItem("lastName") != null) {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
    }
  }

  toggleModalEvent(event) {
    this.modalEvt = Array(event);
  }

  getTriggeredEvent(event) {
    this.isVisibleSection = true;
    if (this.router.url === "/allEvents") {
      this.lastJoinedEvent = "You have joined: " + event;
      setTimeout(() => { this.isVisibleSection = false }, 3000);
    } else if (this.router.url === "/signedEvents") {
      this.lastJoinedEvent = "You have left: " + event;
      setTimeout(() => { this.isVisibleSection = false }, 3000);
    }
  }
}
