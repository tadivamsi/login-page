import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin.component';


const routes: Routes = [{title:'Adminlogin',path: '', component: AdminloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  AdminloginRoutingModule{}
