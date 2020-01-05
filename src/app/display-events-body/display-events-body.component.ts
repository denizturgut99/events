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
  //lastJoinedEvent

  constructor(private router: Router) { }

  toggleModalEvent(event) {
    this.modalEvt = Array(event);
  }

  getTriggeredEvent(event) {
    //this.lastJoinedEvent = event;
    document.getElementById("lastEvent").style.display = "block";

    if (this.router.url === "/allEvents" || this.router.url === "/") {
      document.getElementById("lastEvent").innerHTML = "You have joined: " + event;
      setTimeout(function () { document.getElementById("lastEvent").style.display = "none" }, 3000);
    } else if (this.router.url === "/signedEvents") {
      document.getElementById("lastEvent").innerHTML = "You have left: " + event;
      setTimeout(function () { document.getElementById("lastEvent").style.display = "none" }, 3000);
    }
    //setTimeout(document.getElementById("lastJoinedEvent").innerHTML = "You have joined: " + event, 3000);
  }
}
