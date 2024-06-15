import { Routes } from '@angular/router';
import { WelcomeComponent } from '@pages/welcome/welcome.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { IndexSettingsProxyComponent } from '@pages/admin/settings-proxy/index-settings-proxy/index-settings-proxy.component';
import { IndexUsersComponent } from '@pages/admin/users/index-users/index-users.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'settings-proxy', component: IndexSettingsProxyComponent },
  { path: 'users', component: IndexUsersComponent },
  { path: 'page-not-found', component: PageNotFoundComponent }, //Wild Card Route for 404 request
  { path: '**', redirectTo: 'page-not-found' } //Wild Card Route for 404 request
];
