import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CrudService } from 'src/app/service/crud.service';
import { Articulos } from '../../models/articulos';
import {carouselDataItems } from '../../models/dataCarousel'
import { LoadingObservableService } from 'src/app/service/loading-observable.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public carrouselData : Carousel []  = carouselDataItems
  flag = false;
  articulos: Articulos[] = [];
  loader= true;
  aux = true;
  constructor(public crudService:CrudService,  private loadingObservable:LoadingObservableService) { }

  ngOnInit(): void {
    // this.pedirArticulos()

    this.loadingObservable.loading$.subscribe(res => {
      this.aux = res
     
    })    
this.aux=false
  }




  cambiarFlag(){
    this.flag = !this.flag;
  }

pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
  this.aux = false;


    });//fin de subscribe
  } //fin de pedirProductos

  cambiar(){

  }
};


