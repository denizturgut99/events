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

  constructor(private router: Router) {  }

  toggleModalEvent(event) {
    this.modalEvt = Array(event);
  }
}
