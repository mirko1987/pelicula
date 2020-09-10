import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,JsonpModule} from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoComponent } from './components/demo/demo.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DemoComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
