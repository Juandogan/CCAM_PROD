
import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/service/crud.service';



@Component({ 
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})   
export class GestorComponent implements OnInit {
  

    
  public fechaPublicacion =new Date();  
  articulos: Articulos[] = []
  id=""
  activo=true; //estilo 
  cambioPantalla = true;
  loader = true;
  loader2 = true
cantArt:number = 0
 public titulo:string = "";
 public subtitulo:string = "";
 public nota:string = "";
 public autor:string = "";
 public categoria:string = "";
 public fotografia:string = "";
 public edicionFotografia:string = "";


  constructor(public crudService:CrudService) { 



  }

  ngOnInit(): void {
    this.pedirArticulos()
	
      
  }


pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
  console.log(this.articulos)
  this.cantArt = this.articulos.length
 this.loader2 = false
    });//fin de subscribe
  } //fin de pedirProductos


test(){
  console.log(this.titulo)
}

agregarPublicacion(){
this.crudService.unArticulo.categoria = this.categoria;
this.crudService.unArticulo.titulo = this.titulo;
this.crudService.unArticulo.fecha =   String(this.fechaPublicacion)
this.crudService.unArticulo.subtitulo = this.subtitulo;
this.crudService.unArticulo.autor = this.autor
this.crudService.unArticulo.fotografia = this.fotografia
this.crudService.unArticulo.edicionFotografia = this.edicionFotografia
this.crudService.unArticulo.nota = this.nota

  // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
  if( this.crudService.unArticulo._id)
  {
  this.crudService.modificarArticulo(this.crudService.unArticulo)
  .subscribe(res => { this.crudService.snack('Guardado!')});
}
  else  {
     this.crudService.unArticulo.vistas = 0
    //  this.crudService.unProducto.fecha = String(this.fachaPublicacion)
       this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => { this.crudService.snack(res)
        this.pedirArticulos()
        
      })
}

};



eliminarArticulo(id:any){
  
this.crudService.deleteArticulo(id).subscribe(res =>{this.crudService.snack(res);   this.pedirArticulos(); this.activo = true;})

}


editarArticulo(articulos:Articulos){

 this.crudService.unArticulo = articulos
 this.categoria = this.crudService.unArticulo.categoria
 this.titulo = this.crudService.unArticulo.titulo
 this.subtitulo = this.crudService.unArticulo.subtitulo
 this.autor = this.crudService.unArticulo.autor 
 this.fotografia = this.crudService.unArticulo.fotografia 
 this.edicionFotografia = this.crudService.unArticulo.edicionFotografia
this.nota = this.crudService.unArticulo.nota

}

limpiar(){
  this.id =""
  this.crudService.unArticulo._id =""

  this.categoria = ""  
  this.titulo = ""  
  this.subtitulo = ""  
  this.autor = ""  
  this.fotografia = ""  
  this.edicionFotografia = ""  
  this.nota = ""
 

}


cut(value){
  var corte = value.slice(8)

 return corte
};

};



