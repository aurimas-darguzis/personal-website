import { StoriesComponent } from './components/stories/stories.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { MeComponent } from './components/me/me.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './components/security/security.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'is', component: MeComponent },
  { path: 'showreel', component: ShowreelComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'security', component: SecurityComponent },
  { path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
