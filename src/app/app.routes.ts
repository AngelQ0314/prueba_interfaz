import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarruselModule } from './carrusel/carrusel.module';
import { FotosComponent } from './fotos/fotos.component';
import { FormularioComponent } from './formulario/formulario.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'fotos', component:FotosComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'carrusel', component:CarruselComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes), CarruselModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

  