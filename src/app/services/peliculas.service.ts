import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "d1b4128176d8e1f7cb6b6f5f82991544";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) { }



  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr= `${desde.getFullYear()}-${desde.getMonth()+1 }-${desde.getDate() }`;
    let hastaStr= `${hasta.getFullYear()}-${hasta.getMonth()+1 }-${hasta.getDate() }`;


    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
