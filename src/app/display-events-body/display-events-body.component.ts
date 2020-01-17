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

  constructor(private router: Router) { }

  toggleModalEvent(event) {
    this.modalEvt = Array(event);
  }

  getTriggeredEvent(event) {
    this.isVisibleSection = true;
    //I will have to remove the empty url once the forum page is set up
    if (this.router.url === "/allEvents" || this.router.url === "/") {
      this.lastJoinedEvent = "You have joined: " + event;
      setTimeout(() => { this.isVisibleSection = false }, 3000);
    } else if (this.router.url === "/signedEvents") {
      this.lastJoinedEvent = "You have left: " + event;
      setTimeout(() => { this.isVisibleSection = false }, 3000);
    }
  }
}
