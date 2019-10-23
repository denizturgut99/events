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

    for (let i = 0; i < modalData.length; i++) {
      for (let y = 0; y < events.length; y++) {
        if (modalData[i].id == events[y].id) {
          if (events[y].isSignedUp == false) {
            events[y].isSignedUp = true;
          } else if (events[y].isSignedUp == true) {
            events[y].isSignedUp = false;
          }
        }
      }
    }
    this.eventData = events;
    localStorage.setItem('mainData', JSON.stringify(this.eventData));
  }
}
