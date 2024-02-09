import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [  {
  path: 'Adminlogin',
  loadChildren: () => import('./adminlogin/adminlogin.module').then(x => x.AdminloginModule)
},
{
  path: 'Home',
  loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
},
  { path: 'aboutme', loadChildren: () => import('./aboutme/aboutme.module').then(m => m.AboutmeModule) },
{
  path: 'Aboutme',
  loadChildren: () => import('./aboutme/aboutme.module').then(x => x.AboutmeModule)
},
  { path: 'skills', loadChildren: () => import('./sills/sills.module').then(m => m.SillsModule) },
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
