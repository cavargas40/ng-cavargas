import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    component: ContentLayoutComponent,
  },
  {
    path: 'crypto',
    loadChildren: () =>
      import('./modules/crypto/crypto.module').then((m) => m.CryptoModule),
  },
  {
    path: '3d',
    loadChildren: () =>
      import('./modules/m3d/m3d.module').then((m) => m.M3dModule),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
