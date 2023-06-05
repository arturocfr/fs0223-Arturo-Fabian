import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckedComponent } from './pages/checked/checked.component';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from './pages/note-card/note-card.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { CompletedComponent } from './pages/completed/completed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckedComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }