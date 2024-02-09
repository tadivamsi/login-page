import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SillsRoutingModule } from './sills-routing.module';
import { SillsComponent } from './sills.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SillsComponent
  ],
  imports: [
    CommonModule,
    SillsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class SillsModule { }
