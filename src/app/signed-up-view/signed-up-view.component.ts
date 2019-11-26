import { Component } from '@angular/core';

@Component({
  selector: 'app-signed-up-view',
  templateUrl: './signed-up-view.component.html',
  styleUrls: ['./signed-up-view.component.css']
})
export class SignedUpViewComponent {
  allEvts;

  constructor() {
    if(localStorage.getItem('mainData') != null) {
      this.allEvts = JSON.parse(localStorage.getItem('mainData'));
    }
  }
}
