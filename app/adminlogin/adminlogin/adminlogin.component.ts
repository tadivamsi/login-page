import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  myform: any = FormGroup
  submitAttempt = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder, private cookieService: CookieService, private router: Router) {
  }
  ngOnInit() {
    this.cookieService.get('emaillogin')
    this.myform = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)]),
      ],
      password: ['', Validators.required],
      checkbox: ['']
    });
    console.log(this.cookieService.get("emaillogin"));
    if (this.cookieService.get("emaillogin") !== "") {
      this.myform.controls['Email'].setValue(this.cookieService.get("emaillogin"))
      // this.myform.controls['checkbox'].setValue(true)
    }
  }
  Singin() {
    this.submitAttempt = true;
    console.log(this.myform.value.checkbox);
    const userlogin = this.cookieService.get('emailLogin')
    if (userlogin) {
      console.log('user', userlogin);
    }
    else {
      console.log('user cookie not fount');
    }
    if (this.myform.value.checkbox == true) {
      const emailLogin = this.myform.value.Email;
      console.log(emailLogin);
      this.cookieService.set('emaillogin', emailLogin)
      this.router.navigateByUrl('/Home')
      alert("login Successfully")
    }
    if (this.myform.controls['Email'].value && this.myform.controls['password'].value == '') {
      this.router.navigateByUrl('')
      alert("Please  enter  a  Password")
    }
  }
}

