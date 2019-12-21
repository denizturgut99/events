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
  lastJoinedEvent

  constructor(private router: Router) {  }

  toggleModalEvent(event) {
    this.modalEvt = Array(event);
  }

  getTriggeredEvent(event) {
    this.lastJoinedEvent = event;
    if(this.router.url === "/allEvents" || this.router.url === "/") {
      document.getElementById("lastTriggeredEvent").innerHTML = "You have joined: " + event;
      setTimeout(function() { document.getElementById("lastTriggeredEvent").style.display = "none" }, 3000);
    } else if (this.router.url === "/signedEvents") {
     document.getElementById("lastTriggeredEvent").innerHTML = "You have left: " + event;
     setTimeout(function() { document.getElementById("lastTriggeredEvent").style.display = "none" }, 3000);
    }
    //setTimeout(document.getElementById("lastJoinedEvent").innerHTML = "You have joined: " + event, 3000);
  }
}
