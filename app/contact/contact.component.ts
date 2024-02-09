import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myform: any = FormGroup
  submitAttempt = false;
  cookievalue: any
  formdata: any
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private router: Router, private formBuilder: FormBuilder, private cookieService: CookieService) { }
  ngOnInit() {
    this.myform = this.formBuilder.group({
      name: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)]),
    ],
      pnum: ['', Validators.required],
      textarea: ['', Validators.required],
    });
  }
  logout() {
    this.router.navigateByUrl('/Adminlogin')
  }
  setcookie() {
    this.cookieService.set('mycookie', 'cookievalue')
  }
  getcookie() {
    this.cookievalue = this.cookieService.get('mycookie')
    console.log(this.cookievalue);
  }
  submit() {
    if (this.myform.valid) {
      this.formdata = this.myform.value;
      console.log("Form submitted with data", this.formdata);
    }
    else {
      this.submitAttempt = true
    }
  }
}
