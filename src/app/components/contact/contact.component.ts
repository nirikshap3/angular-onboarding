import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.contactForm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value);
  }

  onReactiveSubmit() {
    console.log(this.contactForm.value);
  }

}
