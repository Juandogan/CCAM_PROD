
import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/service/crud.service';


@Component({ 
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})   
export class GestorComponent implements OnInit {
  public uploadedFiles: Array<File> = [];
  public fechaPublicacion =new Date();  
  password = false; 
  password1 = "";
  articulos: Articulos[] = [] 
  id:string = ""
  activo=true; //estilo 
  cambioPantalla = true;
  loader = true;
  loader2 = true;
  cantArt:number = 0;
  filterPost=""

 public titulo:string = "";
 public tituloAlt:string = "";
 public subtitulo:string = "";
 public nota:string = "";
 public autor:string = "";
 public hash:string = "";
 public categoria:string = "";
 public fotografia:string = "";
 public edicionFotografia:string = "";
 public likes = 0
 public ocultar=true;
 public ocultar2=true;
 public loading:boolean = true;
 public loading2:boolean = false;
 public loading3:boolean = false;
 public loading4:boolean = false;
 public loading5:boolean = false;
 public archivoShow:boolean = false
 cambioPantalla1=false
 public posicion = 0
 
 tituloShow=false;
 subtituloShow=false;
 descripcionShow=false;

 imagenShow=false;

 tituloImagenShow = false;
  constructor(public crudService:CrudService) { 



  }

  ngOnInit(): void {
    this.pedirArticulos()	 
      
  }
  checkPassword(value){
    if(value==="admin"){
      this.password = true

    } else{this.password = false}
  }

pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
  console.log(this.articulos)
  this.cantArt = this.articulos.length
  this.articulos = this.articulos.reverse()
 this.loader2 = false
  
    });//fin de subscribe
  } //fin de pedirProductos


test(){
  console.log(this.titulo)
}

fnOcultar(){
  this.ocultar2=true
  this.loading3=false
  this.imagenShow=true
};

fnOcultar2(){
  this.ocultar=true
  this.loading5=false
  this.archivoShow=true
};
agregarPublicacion(){
this.crudService.unArticulo.categoria = this.categoria;
this.crudService.unArticulo.titulo = this.titulo;
this.crudService.unArticulo.tituloAlt = this.tituloAlt;
this.crudService.unArticulo.fecha =  String(this.fechaPublicacion);
 this.crudService.unArticulo.subtitulo = this.subtitulo;
this.crudService.unArticulo.autor = this.autor
this.crudService.unArticulo.fotografia = this.fotografia
this.crudService.unArticulo.edicionFotografia = this.edicionFotografia
this.crudService.unArticulo.nota = this.nota
this.crudService.unArticulo.likes = 1
this.crudService.unArticulo.posicion =  this.posicion


  // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
  if( this.crudService.unArticulo._id)
  {  
    this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)
  this.crudService.modificarArticulo(this.crudService.unArticulo)
  .subscribe(res => { this.crudService.snack('Modificado!')});
 
}
  else  {
     this.crudService.unArticulo.vistas = 0
      this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)
      console.log('antes de mandar a guardar',this.crudService.unArticulo)
      
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
 this.tituloAlt = this.crudService.unArticulo.tituloAlt
 this.subtitulo = this.crudService.unArticulo.subtitulo
 this.autor = this.crudService.unArticulo.autor 
 this.fotografia = this.crudService.unArticulo.fotografia 
 this.edicionFotografia = this.crudService.unArticulo.edicionFotografia
this.nota = this.crudService.unArticulo.nota
this.posicion = this.crudService.unArticulo.posicion

}

limpiar(){
  this.id =""
  this.crudService.unArticulo._id =""

  this.categoria = ""  
  this.titulo = ""  
  this.tituloAlt = ""  
  this.subtitulo = ""  
  this.autor = ""  
  this.fotografia = ""  
  this.edicionFotografia = ""  
  this.nota = ""
  this.posicion = 0

}


cut(value){
  var corte = value.slice(8)

 return corte
};

onUpload(){
  let formData = new FormData();
  
   for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

   formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

   }
   this.crudService.uploadFile(formData).subscribe(res => {
    console.log("formdata", formData)
      var link = Object.values(res) 
     console.log(link)
     
    this.crudService.unArticulo.imagen1 = String(link) ;
     

     
     this.ocultar2 = false
     this.loading2=false;
     this.loading3=true;
     
   })

 };

 onUpload2(){
   let formData = new FormData();
    for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

      formData.append("archivos", this.uploadedFiles[i])

    }
    this.crudService.uploadFile(formData).subscribe(res => {
      var ass  = String(res);
      this.crudService.unArticulo.imagen1 = ass ;

      this.ocultar=false
      this.loading4=false;
      this.loading5=true;
    })

  };

 onFileChange(e){

   this.uploadedFiles = e.target.files;
 };

};



