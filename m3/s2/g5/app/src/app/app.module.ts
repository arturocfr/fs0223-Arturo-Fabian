import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CheckedComponent } from './Pages/checked/checked.component';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from './Pages/note-card/note-card.component';
import { NoteDetailsComponent } from './Pages/note-details/note-details.component';
import { CompletedComponent } from './Pages/completed/completed.component';


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