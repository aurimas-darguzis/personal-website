import { ProjectsService } from './showreel/db/projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogBoxComponent } from './material-components';

import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
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

// firebaseconfig
export const firebaseConfig = {
    apiKey: 'AIzaSyAaUrcQV4PZObFU61mZXjsK39Dce2vC5Zw',
    authDomain: 'civic-genre-139017.firebaseapp.com',
    databaseURL: 'https://civic-genre-139017.firebaseio.com',
    projectId: 'civic-genre-139017',
    storageBucket: 'civic-genre-139017.appspot.com',
    messagingSenderId: '644038543495'
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DialogBoxComponent,
    ShowreelComponent,
    // ShowreelService,
    AngularFirstAppComponent,
    AboutMeComponent,
    BlogComponent,
    SignupComponent,
    SigninComponent
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  providers: [ShowreelService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
