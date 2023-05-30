import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {InitialLettersUpperCasePipe} from "./pipes/initial-letters-upper-case.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InitialLettersUpperCasePipe
  ],
  exports: [
    // Exported Modules

    FormsModule,
    ReactiveFormsModule,

    // Exported Declarations
    InitialLettersUpperCasePipe,
    NgOptimizedImage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
