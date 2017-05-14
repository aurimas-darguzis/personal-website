import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogBoxComponent } from './material-components';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowreelComponent } from './showreel/showreel.component';
import { AngularFirstAppComponent } from './showreel/angular-first-app/angular-first-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DialogBoxComponent,
    ShowreelComponent,
    AngularFirstAppComponent
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
