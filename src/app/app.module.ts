import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { FormJokeComponent } from './form-joke/form-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent,
    FormJokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
