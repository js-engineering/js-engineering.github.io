import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor() { }

  enquiryForm: any;

  ngOnInit(): void {
    this.enquiryForm = new FormGroup({
      "fullName": new FormControl(null, Validators.required),
      "companyName": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "mobileNo": new FormControl(null, Validators.required),
      "message": new FormControl(null, Validators.required)
    });
  }

  async submitData() {
    console.log(this.enquiryForm.value);
    if (this.enquiryForm.valid) {
      emailjs.init('P-tDpNvxmnzSH1iQN');
      let response = await emailjs.send("service_77r1bdr","template_9bjpuer",{
        fullName: this.enquiryForm.value.fullName,
        mobile: this.enquiryForm.value.mobileNo,
        companyName: this.enquiryForm.value.companyName,
        email: this.enquiryForm.value.email,
        message: this.enquiryForm.value.message,
        from_name: this.enquiryForm.value.fullName,
        reply_to: "No Replay Mail",
        });
      alert(`Form Submitted ${this.enquiryForm.value.fullName}`);
      this.enquiryForm.reset();
    } 
  }

  get fullname() {
    return this.enquiryForm.get("fullName");
  }

  get companyname() {
    return this.enquiryForm.get("companyName");
  }

  get email() {
    return this.enquiryForm.get("email");
  }

  get mobileno() {
    return this.enquiryForm.get("mobileNo");
  }

  get message() {
    return this.enquiryForm.get("message");
  }

}


