import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { StoriesComponent } from './components/stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    ShowreelComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
