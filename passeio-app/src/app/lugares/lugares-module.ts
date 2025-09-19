import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LugaresRoutingModule } from './lugares-routing-module';
import { LugarComponent } from './lugar.component/lugar.component';
import {FormControl} from "@angular/forms";


@NgModule({
  declarations: [
    LugarComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule
  ]
})
export class LugaresModule { }
