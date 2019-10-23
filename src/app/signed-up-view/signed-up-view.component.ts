import { Component } from '@angular/core';

@Component({
  selector: 'app-signed-up-view',
  templateUrl: './signed-up-view.component.html',
  styleUrls: ['./signed-up-view.component.css']
})
export class SignedUpViewComponent {
  allEvts;
  //signedEvents = [];
  modalEvent;

  constructor() {
    if(localStorage.getItem('mainData') != null) {
      this.allEvts = JSON.parse(localStorage.getItem('mainData'));
      //this.runFunctions();
    }
  }

  // async runFunctions() {
  //   await this.getSignedEvts();
  // }

  // getSignedEvts() {
  //   let allEvents = this.allEvts;

  //   for (let i = 0; i < allEvents.length; i++) {
  //     if (allEvents[i].isSignedUp == true) {
  //       this.signedEvents.push(allEvents[i]);
  //     }
  //   }
  // }

  // eventData(e) {
  //   this.modalEvent = Array(e);
  // }

  // leaveEvt() {
  //   let modalEvt = this.modalEvent;
  //   let allEvents = this.allEvts;

  //   for (let i = 0; i < modalEvt.length; i++) {
  //     for (let y = 0; y < allEvents.length; y++) {
  //       if (modalEvt[i].id == allEvents[y].id) {
  //         allEvents[y].isSignedUp = false;
  //       }
  //     }
  //   }
  //   this.allEvts = allEvents;
  //   localStorage.setItem('mainData', JSON.stringify(this.allEvts));
  // }

}
