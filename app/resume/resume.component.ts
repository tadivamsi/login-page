import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  constructor( private router:Router) { }
  ngOnInit() {

  }
  logout() {
    this.router.navigateByUrl('/Adminlogin')
  }
}
