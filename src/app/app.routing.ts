import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(routes);
