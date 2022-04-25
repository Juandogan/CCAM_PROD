import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Articulos } from '../../models/articulos';
@Component({
  selector: 'app-articulo-relacionado',
  templateUrl: './articulo-relacionado.component.html',
  styleUrls: ['./articulo-relacionado.component.css']
})
export class ArticuloRelacionadoComponent implements OnInit {
  
  
  articulos: Articulos[] = []
  
  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    this.pedirArticulos()
    this.pedirUnArticulo()
  }

  
pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
 this.articulos = this.articulos.reverse()
 




    });//fin de subscribe
  } //fin de pedirProductos

  pedirUnArticulo(){
  console.log(this.nota[0]._id)
    this.crudService.getOneArticulo(this.nota[0]._id)
    .subscribe(res=>{this.articuloBusqueda = res as Articulos[]
     })
   
    if(this.articuloBusqueda.length > 2)
    {
    this.crudService.snack('No se encontro');
     return
    } 
    }



  cut(value:any){
    if(value){
    var corte = value.slice(2)
    return corte
  }else

 return value;

  
}; 

}
