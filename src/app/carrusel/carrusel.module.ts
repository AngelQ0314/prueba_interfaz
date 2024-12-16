import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CarruselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      {path:'', component:CarruselComponent}
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class CarruselModule { }
