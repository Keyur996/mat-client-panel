import { AngularMaterialModule } from './../common/material.module';
import { LoaderInterceptor } from './loader/service/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './loader/service/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, AngularMaterialModule],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  exports: [LoaderComponent],
})
export class SharedModule {}
