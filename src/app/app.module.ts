import { SharedModule } from './shared/shared.module';
import { CoreModule } from './common/core.module';
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
import { HttpClientModule } from '@angular/common/http';
import { ClientDialogComponent } from './components/client-dialog/client-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    BasicDetailsComponent,
    OtherDetailsComponent,
    AddUpdateClientComponent,
    ClientDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularMaterialModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
