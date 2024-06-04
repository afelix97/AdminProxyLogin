import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent }, //Wild Card Route for 404 request
  { path: '**', redirectTo: 'page-not-found' } //Wild Card Route for 404 request
];
