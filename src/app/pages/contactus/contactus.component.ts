import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitted: boolean = false;
  enquiryform = new FormGroup ({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    nameFormControl: new FormControl('', [Validators.required]),
    companyFormControl: new FormControl('', [Validators.required]),
    mobileFormControl: new FormControl('', [Validators.required]),
    messageFormControl: new FormControl('', [Validators.required])
  });

  onclick()
  {
    if (this.enquiryform.status == 'VALID'){
      
    }
  }

}
