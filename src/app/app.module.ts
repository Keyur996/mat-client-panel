import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClientsComponent } from './components/clients/clients.component';
import { AddUpdateClientComponent } from './components/add-update-client/add-update-client.component';
import { BasicDetailsComponent } from './components/add-update-client/basic-details/basic-details.component';
import { OtherDetailsComponent } from './components/add-update-client/other-details/other-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    BasicDetailsComponent,
    OtherDetailsComponent,
    AddUpdateClientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
