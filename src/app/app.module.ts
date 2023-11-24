import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ListCheckComponent } from './list-check/list-check.component';
import { FormsModule } from '@angular/forms';
import { TaskPassService } from './task-pass.service';

const appRoute: Routes = [
  {path: 'card', component: CardsComponent},
  {path: 'list', component: ListCheckComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [TaskPassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
