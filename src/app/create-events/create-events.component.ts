import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent {

  firstName = "";
  lastName = "";
  isChecked: boolean;

  constructor(private fb: FormBuilder) {
    if (localStorage.getItem("firstName") != null && localStorage.getItem("lastName") != null) {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
    }
  }

  public createEventsForm = this.fb.group({
    eventName: ['', [Validators.required, Validators.minLength(2)]],
    startDate: ['', [Validators.required]]
  });

  checkboxCheck() {
    this.isChecked = (<HTMLInputElement>document.getElementById("checkbox")).checked
  }
}
