import { ShowreelComponent } from './components/showreel/showreel.component';
import { MeComponent } from './components/me/me.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'is',
    component: MeComponent
  },
  {
    path: 'showreel',
    component: ShowreelComponent
  }
];

export const routing = RouterModule.forRoot(routes);
