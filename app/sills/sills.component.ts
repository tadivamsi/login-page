import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sills',
  templateUrl: './sills.component.html',
  styleUrls: ['./sills.component.scss']
})
export class SillsComponent {
constructor(private router:Router){

}
ngOnInit() {

}
logout() {
  this.router.navigateByUrl('/Adminlogin')
}


}
