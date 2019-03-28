import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuotesComponent } from './quotes/quotes.component';
import {FormsComponent} from './forms/forms.component'
import { DetailsComponent} from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormsComponent,
    DetailsComponent
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
