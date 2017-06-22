import { HomeComponent } from './home/home.component';
import { ProjectEditComponent } from './showreel/showreel-project/project-edit/project-edit.component';
import { AngularFirstAppComponent } from './showreel/angular-first-app/angular-first-app.component';
import { ShowreelProjectComponent } from './showreel/showreel-project/showreel-project.component';
import { ProjectDetailsComponent } from './showreel/showreel-project/project-details/project-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ShowreelComponent } from './showreel/showreel.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'showreel', component: ShowreelComponent, children: [
      { path: '', component: ShowreelProjectComponent },
      { path: 'new', component: ProjectEditComponent },
      { path: ':id', component: ProjectDetailsComponent },
      { path: ':id/edit', component: ProjectEditComponent }
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
