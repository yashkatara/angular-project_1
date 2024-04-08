import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.css']
})
export class ApplyformComponent implements OnInit  {
  applicationForm: FormGroup;

  constructor() {
    this.applicationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      resume: new FormControl('', Validators.required),
      linkedin: new FormControl(''),
      // Add more fields as needed
    });

}

ngOnInit(): void {
}

onSubmit() {
  console.log(this.applicationForm.value);
  // Process form data
}
}

