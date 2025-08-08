import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/components/home-page/home-page.component';
import { Homeroutes } from './home-page/home.routes';

export const routes: Routes = [

  ...Homeroutes,
  { path: '', redirectTo: 'All', pathMatch: 'full' },
  {path: '**', redirectTo: 'All' }

];
