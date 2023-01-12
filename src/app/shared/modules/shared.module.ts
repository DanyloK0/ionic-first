import { LoaderInterceptor } from './../interceptors/loader.interceptor';
import { AuthService } from './../services/auth.service';
import { AuthInterceptor } from './../interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "./material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CrudService } from "../services/crud.service";
import { UtilityService } from "../services/utility.service";


@NgModule({
 
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    // Modules
    FormsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CrudService,
    UtilityService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ]
})
export class SharedModule { }
