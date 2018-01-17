import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment} from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SecurityChallengeComponent } from './components/security-challenge/security-challenge.component';
import { StoryNodejsComponent } from './components/stories/story-nodejs/story-nodejs.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    ShowreelComponent,
    StoriesComponent,
    SecurityChallengeComponent,
    StoryNodejsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
