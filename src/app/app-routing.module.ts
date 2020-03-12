import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./modules/links/links.module').then(m => m.LinksModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: 'home' //TODO: 404 page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
