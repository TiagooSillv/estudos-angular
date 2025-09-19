import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { LayoutComponent } from './layout.component/layout.component';
import { CategoriasModule } from '../categorias/categorias-module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule
  ]
})
export class TemplateModule { }
