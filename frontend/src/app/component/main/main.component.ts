import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CrudService } from 'src/app/service/crud.service';
import { Articulos } from '../../models/articulos';
import {carouselDataItems } from '../../models/dataCarousel'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public carrouselData : Carousel []  = carouselDataItems
  flag = false;
  articulos: Articulos[] = []
  loader= true

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    this.pedirArticulos()
    
  }




  cambiarFlag(){
    this.flag = !this.flag;
  }

pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
  console.log(this.articulos)
  this.loader = false;


    });//fin de subscribe
  } //fin de pedirProductos

  cambiar(){

  }
};


