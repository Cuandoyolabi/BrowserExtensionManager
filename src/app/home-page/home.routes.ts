import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AllCardsComponent } from './pages/All-cards/All-cards.component';
import { ActiveCardsComponent } from './pages/Active-cards/Active-cards.component';
import { InactiveCardsComponent } from './pages/Inactive-cards/Inactive-cards.component';

export const Homeroutes: Routes = [

  {
    path: '',
    component: AllCardsComponent,
    children: [
      {path: 'All', component: AllCardsComponent},
      {path: 'Active', component: ActiveCardsComponent},
      {path: 'Inactive', component: InactiveCardsComponent},
      {path: '', redirectTo: 'All', pathMatch: 'full'}
    ]
  }
];
