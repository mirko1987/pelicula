import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'**',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'pelicula',component:PeliculaComponent},
  {path:'buscar',component:BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
