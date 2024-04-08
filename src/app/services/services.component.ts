import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor() { }

  submitForm(form: any) {
    if (form.valid) {
      console.log(form.value);
      form.reset();
    }
  }

}
