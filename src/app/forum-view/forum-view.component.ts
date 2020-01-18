import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent {

  isChecked;

  constructor(private router: Router) { }

  checkboxCheck() {
    this.isChecked = (<HTMLInputElement>document.getElementById("checkbox")).checked;
  }

  submitData() {
    let firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    let lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    let favLang = (<HTMLSelectElement>document.getElementById("favLang")).value;

    if (firstName.length > 0 && lastName.length > 0) {
      if (firstName.match("^[a-zA-Z]+$") != null && lastName.match("^[a-zA-Z]+$") != null) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("favLang", favLang);
        this.router.navigate(['/allEvents']);
      } else {
        alert("You are only allowed to use letters in the First Name AND Last Name section")
      }
    } else {
      alert("You have to fill in your first AND last name")
    }
  }

}
