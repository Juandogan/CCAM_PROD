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
      this.auxContador =  this.nota[0].vistas

       
})


  }



  
  saltos(data){
  var aux2 = data.split('<h2>').join(`<h2 style="
                                      font-weight: 700; 
                                      line-height: 22px;
                                      letter-spacing: -1px;
                                      font-size:20px;
                                      color:orange;
                                      margin-bottom:15px;
                                       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                       `)

  aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
  line-height: 30px;
  letter-spacing: -1px;
  font-size:22px;
  color:orange;
  margin-bottom:10px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)

                                    aux2 = aux2.split('<p').join(`<p
                                    style="font-family: Georgia, 'Times New Roman', Times, serif; 
                                    font-weight: 300;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 26px;
                                    color:rgb(68, 68, 68);"
                                   
                                                                      `)
                                                                      
                                    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                    // aux2 = aux2.split('</p></strong>').join('</p></b>')
                                    aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px"')
                                    
                                    


  
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
  this.crudService.unArticulo.imagen1 = this.nota[0].imagen1
  this.crudService.unArticulo.imagen2 = this.nota[0].imagen2
  this.crudService.unArticulo.imagen3 = this.nota[0].imagen3
  this.crudService.unArticulo.categoria = this.nota[0].categoria;
  this.crudService.unArticulo.titulo = this.nota[0].titulo;
  this.crudService.unArticulo.fechaCreate =  String(this.nota[0].fechaPublicacion);
  this.crudService.unArticulo.subtitulo = this.nota[0].subtitulo;
  this.crudService.unArticulo.autor = this.nota[0].autor
  this.crudService.unArticulo.fotografia = this.nota[0].fotografia
  this.crudService.unArticulo.edicionFotografia = this.nota[0].edicionFotografia
  this.crudService.unArticulo.nota = this.nota[0].nota


      // this.crudService.unProducto.fecha = String(this.fachaPublicacion)

    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {  })
        }
  



  

   ngOnDestroy(){
  this.sumarContador()
 
  }

};