import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  constructor( private router:Router){

  }
  ngOnInit() {

  }

  logout() {
    this.router.navigateByUrl('/Adminlogin')
  }
  
}
