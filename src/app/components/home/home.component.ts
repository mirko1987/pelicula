import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera :any;

  constructor( public _ps:PeliculasService) {
    this._ps.getCartelera()
        .subscribe( data =>{
          console.log(data);
          this.cartelera = data;
        }



        );

   }

  ngOnInit() {
  }

}
