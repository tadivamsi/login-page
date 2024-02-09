import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SillsComponent } from './sills.component';

const routes: Routes = [{ title:'skills',path: '', component: SillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SillsRoutingModule { }
