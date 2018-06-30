import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

/**
 * Route configuration array.
 * @type {({path: string; component: DashboardComponent} | {path: string; component: ManageComponent})[]}
 */
const routes: Routes = [
  {
    path: '', // no path acts like the app index.
    component: DashboardComponent // links to the component.
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

/**
 * Export the routes for use. forRoot passes the configuration to the RouterModule.
 * @type {ModuleWithProviders}
 */
export const AppRoutes = RouterModule.forRoot(routes);
