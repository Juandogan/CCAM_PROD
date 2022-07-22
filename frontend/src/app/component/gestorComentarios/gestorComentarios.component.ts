import { Component, OnInit} from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/service/crud.service';
import { LoadingObservableService } from 'src/app/service/loading-observable.service';

@Component({
  selector: 'app-gestorComentarios',
  templateUrl: './gestorComentarios.component.html',
  styleUrls: ['./gestorComentarios.component.css']
})
export class GestorComentariosComponent implements OnInit {
  loader2=true
  articulos: Articulos[] = [] 
  constructor(public crudService:CrudService, private loadingObservable:LoadingObservableService) { }

  ngOnInit() {


    this.loadingObservable.loading$.subscribe(res => {
      this.loader2 = res   

                         })   

    this.pedirArticulos()

     
  
        
  }



  pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    this.crudService.getArticulos().subscribe(res =>{
    this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
    console.log(this.articulos)
   // this.cantArt = this.articulos.length
    this.articulos = this.articulos.reverse()
   this.loader2 = false
      
   
    
      });//fin de subscribe
    } //fin de pedirProductos
  
}
