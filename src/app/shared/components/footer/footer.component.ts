import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailInput: FormControl;

  constructor() {
    this.emailInput = new FormControl('', [
      Validators.email
    ]);
   /* this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
    */
   }

  ngOnInit() {
  }

  registerMail() {
    if (this.emailInput.valid) {
      console.log(`Send email to ${this.emailInput.value}`);
    }
  }

}
