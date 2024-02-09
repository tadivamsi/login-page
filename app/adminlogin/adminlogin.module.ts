import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminloginRoutingModule } from './adminlogin/adminlogin-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
     AdminloginRoutingModule,
     MatCheckboxModule,
     MatButtonModule,
     FormsModule,
     ReactiveFormsModule,
     MatCardModule,
     MatIconModule
  ]
})
export class AdminloginModule { }
