import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  firstName = "";
  lastName = "";

  constructor() {
    if (localStorage.getItem("firstName") != null && localStorage.getItem("lastName") != null) {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
    }
  }

}
