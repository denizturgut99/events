import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent {
  
  constructor(private router: Router, private fb: FormBuilder) { };

  isChecked: boolean;

  public registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ]+( [a-zA-ZñÑ]+)*$")]],
    lastName: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ]+( [a-zA-ZñÑ]+)*$")]]
  });

  checkboxCheck() {
    this.isChecked = (<HTMLInputElement>document.getElementById("checkbox")).checked;
  };

  getFirstName() {
    return this.registerForm.get('firstName');
  }

  getLastName() {
    return this.registerForm.get('lastName');
  }

  submitData() {
    const firstName = this.getFirstName();
    const lastName = this.getLastName();

    if (firstName.status === "VALID" && lastName.status === "VALID") {
      localStorage.setItem("firstName", firstName.value);
      localStorage.setItem("lastName", lastName.value);
      this.router.navigate(['/allEvents'])
    }
  };

}
