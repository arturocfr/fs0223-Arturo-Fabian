import { CompletedComponent } from './pages/completed/completed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckedComponent } from './pages/checked/checked.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';

const routes: Routes = [
  { path:'completed', component: CompletedComponent},
  {  path:'',  component: HomeComponent, children: [
    { path:'', component: CheckedComponent} ,
    { path:'new', component: NoteDetailsComponent},
    { path:':id', component: NoteDetailsComponent},
  ]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }