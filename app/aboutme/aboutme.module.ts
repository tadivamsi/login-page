import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeRoutingModule } from './aboutme-routing.module';
import { AboutmeComponent } from './aboutme.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AboutmeComponent
  ],
  imports: [
    CommonModule,
    AboutmeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class AboutmeModule { }
