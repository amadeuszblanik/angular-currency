import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { CurrencyFromInputComponent } from './currency-from-input/currency-from-input.component';
import { CurrencyToInputComponent } from './currency-to-input/currency-to-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    CurrencyFromInputComponent,
    CurrencyToInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
