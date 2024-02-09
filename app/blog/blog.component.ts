import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor( private router:Router){

  }
  ngOnInit() {

  }

  logout() {
    this.router.navigateByUrl('/Adminlogin')
  }
  
}
