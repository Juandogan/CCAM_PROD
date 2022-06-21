import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) { }

  nota:any
  auxContador:number

  ngOnInit(): void {
      window.scroll(0,0)
      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
      this.auxContador =  this.nota[0]?.vistas
      
      })};

  saltos(data){
  var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
   `)
   
   aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
   line-height: 30px;
   letter-spacing: 0px;
   margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)

                                    aux2 = aux2.split('<p').join(`<p
                                    style="
                                    font-weight: 400;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 28px;
                                    color:rgb(68, 68, 68);"`)
                                                                      
                                    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                    // aux2 = aux2.split('</p></strong>').join('</p></b>')
                                    aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px"')
                                    aux2 = aux2.split('<h4').join('<h4 style="text-align: center;"')
                                    
                                    // aux2 = aux2.split('<strong>').join('<strong style="font-size:18px; ">')
                                    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                   
                                    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                    
                                    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

                                  

                                    
console.log('sa' + aux2)

  return (aux2)


   };

   cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

 sumarContador(){
 
  //incrementa el contador
  this.crudService.unArticulo.vistas = this.auxContador + 1
    this.crudService.unArticulo._id = this.nota[0]._id
    this.crudService.unArticulo.comentarios = this.nota[0].comentarios
    this.crudService.unArticulo.contadorComentarios = this.nota[0].contadorComentarios
  this.crudService.unArticulo.imagen1 = this.nota[0].imagen1
  this.crudService.unArticulo.imagen2 = this.nota[0].imagen2
  this.crudService.unArticulo.imagen3 = this.nota[0].imagen3
  this.crudService.unArticulo.posicion = this.nota[0].posicion
  this.crudService.unArticulo.categoria = this.nota[0].categoria;
  this.crudService.unArticulo.titulo = this.nota[0].titulo;
  this.crudService.unArticulo.fecha  =  String(this.nota[0].fecha);
  this.crudService.unArticulo.fechaMod  =  String(this.nota[0].fechaMod);
  this.crudService.unArticulo.subtitulo = this.nota[0].subtitulo;
  this.crudService.unArticulo.autor = this.nota[0].autor
  this.crudService.unArticulo.fotografia = this.nota[0].fotografia
  this.crudService.unArticulo.edicionFotografia = this.nota[0].edicionFotografia
  this.crudService.unArticulo.nota = this.nota[0].nota
  this.crudService.unArticulo.art1 = this.nota[0].art1
  this.crudService.unArticulo.art2 = this.nota[0].art2
  this.crudService.unArticulo.art3 = this.nota[0].art3
  this.crudService.unArticulo.art4 = this.nota[0].art4
  this.crudService.unArticulo.art5 = this.nota[0].art5
  this.crudService.unArticulo.art6 = this.nota[0].art6
  this.crudService.unArticulo.resultadoID = this.nota[0].resultadoID
  this.crudService.unArticulo.resultadoID2 = this.nota[0].resultadoID2
  this.crudService.unArticulo.resultadoID3 = this.nota[0].resultadoID3
  this.crudService.unArticulo.resultadoID4  = this.nota[0].resultadoID4
  this.crudService.unArticulo.resultadoID5 = this.nota[0].resultadoID5
  this.crudService.unArticulo.resultadoID6 = this.nota[0].resultadoID6


  this.crudService.unArticulo.resultadoCategoria = this.nota[0]?.resultadoCategoria 
  this.crudService.unArticulo.resultadoCategoria2 = this.nota[0]?.resultadoCategoria2
  this.crudService.unArticulo.resultadoCategoria3 = this.nota[0]?.resultadoCategoria3
  this.crudService.unArticulo.resultadoCategoria4 = this.nota[0]?.resultadoCategoria4
  this.crudService.unArticulo.resultadoCategoria5 = this.nota[0]?.resultadoCategoria5
  this.crudService.unArticulo.resultadoCategoria6 = this.nota[0]?.resultadoCategoria6


  this.crudService.unArticulo.resultadoImagen = this.nota[0]?.resultadoImagen
  this.crudService.unArticulo.resultadoImagen2 = this.nota[0]?.resultadoImagen2
  this.crudService.unArticulo.resultadoImagen3 = this.nota[0]?.resultadoImagen3
  this.crudService.unArticulo.resultadoImagen4 = this.nota[0]?.resultadoImagen4
  this.crudService.unArticulo.resultadoImagen5 = this.nota[0]?.resultadoImagen5
  this.crudService.unArticulo.resultadoImagen6 = this.nota[0]?.resultadoImagen6


      // this.crudService.unProducto.fecha = String(this.fachaPublicacion)

    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {  })
        }
  

 

  

   ngOnDestroy(){
  this.sumarContador()
 
  }

};