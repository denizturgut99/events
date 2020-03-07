import { CityJsonDataService } from './../city-json-data.service';
import { MainViewComponent } from './../main-view/main-view.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent {

  firstName = "";
  lastName = "";
  isChecked: boolean;
  cityData;

  constructor(private fb: FormBuilder, private cd: CityJsonDataService) {
    if (localStorage.getItem("firstName") != null && localStorage.getItem("lastName") != null) {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
    }
    this.cd.getCities().subscribe(city => {
      this.cityData = city;
      console.log(this.cityData)
    })
  }

  public createEventsForm = this.fb.group({
    eventName: ['', [Validators.required, Validators.minLength(2)]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    isFree: ['', [Validators.required]],
    city: ['', [Validators.required]]
  });

  checkboxCheck() {
    this.isChecked = (<HTMLInputElement>document.getElementById("checkbox")).checked
  }

  submitData() {
    console.log("this is working fine")
  }
}
