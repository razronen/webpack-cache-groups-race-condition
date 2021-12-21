import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_VERSION } from '../tokens/app-version';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_VERSION,
    useValue: '1.0.0'// AppVersion
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
