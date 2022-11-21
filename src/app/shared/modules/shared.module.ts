import { LoaderInterceptor } from './../interceptors/loader.interceptor';
import { AuthService } from './../services/auth.service';
import { AuthInterceptor } from './../interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "./material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from "../components/form/form.component";
import { InputDatePickerComponent } from "../components/input-date-picker/input-date-picker.component";
import { InputSelectComponent } from "../components/input-select/input-select.component";
import { InputTextareaComponent } from "../components/input-textarea/input-textarea.component";
import { InputPasswordComponent } from "../components/input-password/input-password.component";
import { InputComponent } from "../components/input/input.component";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { ToggleComponent } from "../components/toggle/toggle.component";
import { InputFileComponent } from "../components/input-file/input-file.component";
import { RadioButtonComponent } from "../components/radio-button/radio-button.component";
import { SliderComponent } from "../components/slider/slider.component";

import { CrudService } from "../services/crud.service";
import { UtilityService } from "../services/utility.service";


@NgModule({
  declarations: [
    FormComponent,
    InputDatePickerComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputPasswordComponent,
    InputComponent,
    CheckboxComponent,
    ToggleComponent,
    InputFileComponent,
    RadioButtonComponent,
    SliderComponent
  ],
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

    // Components
    FormComponent,
    InputDatePickerComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputPasswordComponent,
    InputComponent,
    CheckboxComponent,
    ToggleComponent,
    InputFileComponent,
    RadioButtonComponent,
    SliderComponent
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
