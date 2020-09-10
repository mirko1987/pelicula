import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
     if( pelicula.backdrop_path ){
       return pelicula.backdrop_path;
     } else {
       if( pelicula.poster_path ){
          return pelicula.poster_path;
       }else{
         return "assets/images/no-image.svg";
       }
     }
  }

}
