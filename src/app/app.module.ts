import { AppRoutingModule } from './app-routing.module';
import { ProjectsService } from './showreel/db/projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogBoxComponent } from './material-components';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
// import { AuthService} from './auth/auth.service';
// import { AF } from './providers/af';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowreelComponent } from './showreel/showreel.component';
import { ShowreelService } from './showreel/showreel.service';
import { AngularFirstAppComponent } from './showreel/angular-first-app/angular-first-app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ProjectDetailsComponent } from './showreel/showreel-project/project-details/project-details.component';
import { ShowreelProjectComponent } from './showreel/showreel-project/showreel-project.component';
import { ProjectEditComponent } from './showreel/showreel-project/project-edit/project-edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DialogBoxComponent,
    ShowreelComponent,
    AngularFirstAppComponent,
    AboutMeComponent,
    BlogComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    ProjectDetailsComponent,
    ShowreelProjectComponent,
    ProjectEditComponent,
    HomeComponent
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  providers: [ShowreelService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
