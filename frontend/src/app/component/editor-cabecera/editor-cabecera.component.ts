import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/service/crud.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editor-cabecera',
  templateUrl: './editor-cabecera.component.html',
  styleUrls: ['./editor-cabecera.component.css']
})
export class EditorCabeceraComponent implements OnInit {
  fichaOk = false
  comentarios ="";
  openInputBuscar:Boolean = true;
  openInput:Boolean = true;
  openInput2:Boolean = true;
  openInput3:Boolean = true;
  openInput4:Boolean = true;
  openInput5:Boolean = true;
  openInput6:Boolean = true;
  openInput7:Boolean = true;
  openInput8:Boolean = true;
  openInput9:Boolean = true;
  openInput10:Boolean = true;
  openInput11:Boolean = true;
  openInput12:Boolean = true;

  
  public uploadedFiles: Array<File> = [];
  resultadoTitulo:string =""
  resultadoTitulo2:string =""
  resultadoTitulo3:string =""
  resultadoTitulo4:string =""
  resultadoTitulo5:string =""
  resultadoTitulo6:string =""
  resultadoTitulo7:string =""
  resultadoTitulo8:string =""
  resultadoTitulo9:string =""
  resultadoTitulo10:string =""
  resultadoTitulo11:string =""
  resultadoTitulo12:string =""

  resultadoCategoria:string =""
  resultadoCategoria2:string =""
  resultadoCategoria3:string =""
  resultadoCategoria4:string =""
  resultadoCategoria5:string =""
  resultadoCategoria6:string =""
  resultadoCategoria7:string =""
  resultadoCategoria8:string =""
  resultadoCategoria9:string =""
  resultadoCategoria10:string =""
  resultadoCategoria11:string =""
  resultadoCategoria12:string =""


  resultadoImagen:string =""
  resultadoImagen2:string =""
  resultadoImagen3:string =""
  resultadoImagen4:string =""
  resultadoImagen5:string =""
  resultadoImagen6:string =""
  resultadoImagen7:string =""
  resultadoImagen8:string =""
  resultadoImagen9:string =""
  resultadoImagen10:string =""
  resultadoImagen11:string =""
  resultadoImagen12:string =""


  resultadoID:string =""
  resultadoID2:string =""
  resultadoID3:string =""
  resultadoID4:string =""
  resultadoID5:string =""
  resultadoID6:string =""
  resultadoID7:string =""
  resultadoID8:string =""
  resultadoID9:string =""
  resultadoID10:string =""
  resultadoID11:string =""
  resultadoID12:string =""


  fechaPublicacion = new Date()    ;
  fecha	  = ""
  fechaMod = new Date();    	        
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
  posicion= 0

 public articuloBusqueda: any

 loaderModal = false
 public busqueda:string ="";
 public titulo:string = "";
 public tituloAlt:string = "";
 public subtitulo:string = "";
 public imagen1:string;
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
 public archivoShow:boolean = false;
 
 public aux = 1
 nota1:any
 cambioPantalla1=false;
 tituloShow=false;
 subtituloShow=false;
 descripcionShow=false;
 imagenShow=false;
 tituloImagenShow = false;

 constructor(public crudService:CrudService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.fecha = String(new Date())

    this.ruta.data.subscribe((data)=>{
      this.nota1 = Object.entries(data).map(i => i[1]);
console.log('el posta', this.nota1)
  //cargo desde el objeto a cada una de las variablen vinculadas a los inputs
 this.crudService.unArticulo._id = this.nota1[0]?._id
 this.categoria = this.nota1[0]?.categoria
 this.titulo = this.nota1[0]?.titulo
 this.tituloAlt = this.nota1[0]?.tituloAlt
 this.fecha = this.nota1[0]?.fecha
 this.fechaMod = this.nota1[0]?.fechaMod
 this.subtitulo = this.nota1[0]?.subtitulo
 this.imagen1 = this.nota1[0]?.imagen1
 this.autor = this.nota1[0]?.autor
 this.fotografia = this.nota1[0]?.fotografia
 this.edicionFotografia = this.nota1[0]?.edicionFotografia
 this.nota = this.nota1[0]?.nota
 this.posicion = this.nota1[0]?.posicion
 this.comentarios = this.nota1[0]?.comentarios
 
 //cargo desde el objeto a cada una de las variablen vinculadas a los inputs
  this.resultadoTitulo = this.nota1[0]?.art1
  this.resultadoTitulo2 = this.nota1[0]?.art2
  this.resultadoTitulo3 = this.nota1[0]?.art3
  this.resultadoTitulo4 = this.nota1[0]?.art4
  this.resultadoTitulo5 = this.nota1[0]?.art5
  this.resultadoTitulo6 = this.nota1[0]?.art6
  this.resultadoTitulo7 = this.nota1[0]?.art7
  this.resultadoTitulo8 = this.nota1[0]?.art8
  this.resultadoTitulo9 = this.nota1[0]?.art9
  this.resultadoTitulo10 = this.nota1[0]?.art10
  this.resultadoTitulo11 = this.nota1[0]?.art11
  this.resultadoTitulo12 = this.nota1[0]?.art12
//cargo desde el objeto a cada una de las variablen vinculadas a los inputs
this.resultadoCategoria = this.nota1[0]?.resultadoCategoria 
this.resultadoCategoria2 = this.nota1[0]?.resultadoCategoria2
this.resultadoCategoria3 = this.nota1[0]?.resultadoCategoria3
this.resultadoCategoria4 = this.nota1[0]?.resultadoCategoria4
this.resultadoCategoria5 = this.nota1[0]?.resultadoCategoria5
this.resultadoCategoria6 = this.nota1[0]?.resultadoCategoria6
this.resultadoCategoria7 = this.nota1[0]?.resultadoCategoria7
this.resultadoCategoria8 = this.nota1[0]?.resultadoCategoria8
this.resultadoCategoria9 = this.nota1[0]?.resultadoCategoria9
this.resultadoCategoria10 = this.nota1[0]?.resultadoCategoria10
this.resultadoCategoria11 = this.nota1[0]?.resultadoCategoria11
this.resultadoCategoria12 = this.nota1[0]?.resultadoCategoria12
//cargo desde el objeto a cada una de las variablen vinculadas a los inputs
this.resultadoImagen = this.nota1[0]?.resultadoImagen
this.resultadoImagen2 = this.nota1[0]?.resultadoImagen2
this.resultadoImagen3 = this.nota1[0]?.resultadoImagen3
this.resultadoImagen4 = this.nota1[0]?.resultadoImagen4
this.resultadoImagen5 = this.nota1[0]?.resultadoImagen5
this.resultadoImagen6 = this.nota1[0]?.resultadoImagen6
this.resultadoImagen7 = this.nota1[0]?.resultadoImagen7
this.resultadoImagen8 = this.nota1[0]?.resultadoImagen8
this.resultadoImagen9 = this.nota1[0]?.resultadoImagen9
this.resultadoImagen10 = this.nota1[0]?.resultadoImagen10
this.resultadoImagen11 = this.nota1[0]?.resultadoImagen11
this.resultadoImagen12 = this.nota1[0]?.resultadoImagen12

//cargo desde el objeto a cada una de las variablen vinculadas a los inputs
this.resultadoID = this.nota1[0]?.resultadoID
this.resultadoID2 = this.nota1[0]?.resultadoID2
this.resultadoID3 = this.nota1[0]?.resultadoID3
this.resultadoID4 = this.nota1[0]?.resultadoID4
this.resultadoID5 = this.nota1[0]?.resultadoID5
this.resultadoID6 = this.nota1[0]?.resultadoID6
this.resultadoID7 = this.nota1[0]?.resultadoID7
this.resultadoID8 = this.nota1[0]?.resultadoID8
this.resultadoID9 = this.nota1[0]?.resultadoID9
this.resultadoID10 = this.nota1[0]?.resultadoID10
this.resultadoID11 = this.nota1[0]?.resultadoID11
this.resultadoID12 = this.nota1[0]?.resultadoID12




 
  if (this.nota1[0]?.art1){
    this.aux = 2
  }
  
  if (this.nota1[0]?.art2){
    this.aux = 3
  }
  
  if (this.nota1[0]?.art3){
    this.aux = 4
  }
  if (this.nota1[0]?.art4){
    this.aux = 5
  }
  
  
  if (this.nota1[0]?.art5){
    this.aux = 6
  }
  if (this.nota1[0]?.art6){
    this.aux = 7
  }
  if (this.nota1[0]?.art7){
    this.aux = 8
  }
  if (this.nota1[0]?.art8){
    this.aux = 9
  }
  if (this.nota1[0]?.art9){
    this.aux = 10
  }
  if (this.nota1[0]?.art10){
    this.aux = 11
  }
  if (this.nota1[0]?.art11){
    this.aux = 12
  }


  if(this.categoria   === "Ficha"){
    this.fichaOk = true
  }
       
      //  this.crudService.unArticulo.titulo = this.titulo;
      //  this.crudService.unArticulo.tituloAlt = this.tituloAlt;
      // this.crudService.unArticulo.fecha =  String(this.fechaPublicacion);
      //  this.crudService.unArticulo.subtitulo = this.subtitulo;
      //  this.crudService.unArticulo.autor = this.autor
      //  this.crudService.unArticulo.fotografia = this.fotografia
      //  this.crudService.unArticulo.edicionFotografia = this.edicionFotografia
      //  this.crudService.unArticulo.nota = this.nota
      //   this.crudService.unArticulo.likes = 1
      //  this.crudService.unArticulo.posicion =  this.posicion
      

      })
    
    this.pedirArticulos();


}
fichaChange(x){
  if (x ==="Ficha"){
  this.fichaOk =  true
  }else (this.fichaOk = false)
}

  checkPassword(value){
      if(value==="admin"){
      this.password = true
      }else{this.password = false}
      }

pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  this.crudService.getArticulos().subscribe(res =>{
  this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
  this.cantArt = this.articulos.length
  this.articulos = this.articulos.reverse()
  this.loader2 = false
  console.log(res)
  
    });//fin de subscribe
  } //fin de pedirProductos

pedirUnArticulo(){

this.loaderModal = true
  this.crudService.getOneArticulo(this.busqueda)


  .subscribe(res=>{this.articuloBusqueda = res as Articulos[]

    this.loaderModal = false
    if(this.articuloBusqueda.length > 2){
  
      this.crudService.snack('No se encontro');
      // 
return
    } 


      if(this.aux === 1 ){
       this.resultadoTitulo = this.articuloBusqueda?.titulo
       this.resultadoID = this.articuloBusqueda?._id
       this.resultadoCategoria = this.articuloBusqueda?.categoria
       this.resultadoImagen = this.articuloBusqueda.imagen1
       this.busqueda = ""  
       this.aux = 2
       return
       }
       
    
         
      if(this.aux === 2){
        this.resultadoTitulo2 = this.articuloBusqueda?.titulo
        this.resultadoID2 = this.articuloBusqueda?._id
        this.resultadoCategoria2 = this.articuloBusqueda?.categoria
        this.resultadoImagen2 = this.articuloBusqueda?.imagen1
         this.busqueda = "" 
        this.aux=3
        return
        }
         
                
      if(this.aux === 3){
        this.resultadoTitulo3 = this.articuloBusqueda?.titulo
        this.resultadoID3 = this.articuloBusqueda?._id
        this.resultadoCategoria3 = this.articuloBusqueda?.categoria
        console.log('3 resultadoCatetogir',this.articuloBusqueda?.categoria )
        this.resultadoImagen3 = this.articuloBusqueda?.imagen1
         this.busqueda = ""  
                 this.aux=4
                return }
        
                     
      if(this.aux === 4){
        this.resultadoTitulo4 = this.articuloBusqueda?.titulo
        this.resultadoID4 = this.articuloBusqueda?._id
        this.resultadoCategoria4 = this.articuloBusqueda?.categoria
        this.resultadoImagen4 = this.articuloBusqueda?.imagen1
         this.busqueda = ""   
         this.aux=5
         return
        }
            
         if(this.aux === 5){
          this.resultadoID5 = this.articuloBusqueda?._id
          this.resultadoTitulo5 = this.articuloBusqueda?.titulo
          this.resultadoCategoria5 = this.articuloBusqueda?.categoria
          this.resultadoImagen5 = this.articuloBusqueda?.imagen1
           this.busqueda = "" 
           this.aux = 6
          return  }
        
           if(this.aux === 6){
            this.resultadoID6 = this.articuloBusqueda?._id
            this.resultadoTitulo6 = this.articuloBusqueda?.titulo
            this.resultadoCategoria6 = this.articuloBusqueda?.categoria
            this.resultadoImagen6 = this.articuloBusqueda?.imagen1
             this.busqueda = ""  
            return }
  

            if(this.aux === 7){
              this.resultadoID7 = this.articuloBusqueda?._id
              this.resultadoTitulo7 = this.articuloBusqueda?.titulo
              this.resultadoCategoria7 = this.articuloBusqueda?.categoria
              this.resultadoImagen7 = this.articuloBusqueda?.imagen1
               this.busqueda = ""  
              return }

              if(this.aux === 8){
                this.resultadoID8 = this.articuloBusqueda?._id
                this.resultadoTitulo8 = this.articuloBusqueda?.titulo
                this.resultadoCategoria8 = this.articuloBusqueda?.categoria
                this.resultadoImagen8 = this.articuloBusqueda?.imagen1
                 this.busqueda = ""  
                return }
                if(this.aux === 9){
                  this.resultadoID9 = this.articuloBusqueda?._id
                  this.resultadoTitulo9 = this.articuloBusqueda?.titulo
                  this.resultadoCategoria9 = this.articuloBusqueda?.categoria
                  this.resultadoImagen9 = this.articuloBusqueda?.imagen1
                   this.busqueda = ""  
                  return }
                  if(this.aux === 10){
                    this.resultadoID10 = this.articuloBusqueda?._id
                    this.resultadoTitulo10 = this.articuloBusqueda?.titulo
                    this.resultadoCategoria10 = this.articuloBusqueda?.categoria
                    this.resultadoImagen10 = this.articuloBusqueda?.imagen1
                     this.busqueda = ""  
                    return }
                    if(this.aux === 11){
                      this.resultadoID11 = this.articuloBusqueda?._id
                      this.resultadoTitulo11 = this.articuloBusqueda?.titulo
                      this.resultadoCategoria11 = this.articuloBusqueda?.categoria
                      this.resultadoImagen11 = this.articuloBusqueda?.imagen1
                       this.busqueda = ""  
                      return }
                      if(this.aux === 12){
                        this.resultadoID12 = this.articuloBusqueda?._id
                        this.resultadoTitulo12 = this.articuloBusqueda?.titulo
                        this.resultadoCategoria12 = this.articuloBusqueda?.categoria
                        this.resultadoImagen12 = this.articuloBusqueda?.imagen1
                         this.busqueda = ""  
                        return }
      
      
    
    
   })
 
  
}

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
   
  this.crudService.unArticulo.comentarios = this.comentarios; 
  this.crudService.unArticulo.titulo = this.titulo;
  this.crudService.unArticulo.tituloAlt = this.tituloAlt;
  this.crudService.unArticulo.subtitulo = this.subtitulo;
  this.crudService.unArticulo.fecha =  this.fecha
  this.crudService.unArticulo.imagen1 = this.imagen1;
  this.crudService.unArticulo.categoria = this.categoria
  this.crudService.unArticulo.autor = this.autor
  this.crudService.unArticulo.posicion = this.posicion
  this.crudService.unArticulo.fotografia = this.fotografia
   this.crudService.unArticulo.edicionFotografia = this.edicionFotografia
  this.crudService.unArticulo.nota = this.nota  //esta variable para la editoria
  this.crudService.unArticulo.art1 = this.resultadoTitulo
  this.crudService.unArticulo.art2 = this.resultadoTitulo2
  this.crudService.unArticulo.art3 = this.resultadoTitulo3
  this.crudService.unArticulo.art4 = this.resultadoTitulo4
  this.crudService.unArticulo.art5 = this.resultadoTitulo5
  this.crudService.unArticulo.art6 = this.resultadoTitulo6
  this.crudService.unArticulo.art7 = this.resultadoTitulo7
  this.crudService.unArticulo.art8 = this.resultadoTitulo8
  this.crudService.unArticulo.art9 = this.resultadoTitulo9
  this.crudService.unArticulo.art10 = this.resultadoTitulo10
  this.crudService.unArticulo.art11 = this.resultadoTitulo11
  this.crudService.unArticulo.art12 = this.resultadoTitulo12
 
       
  this.crudService.unArticulo.resultadoCategoria = this.resultadoCategoria 
  this.crudService.unArticulo.resultadoCategoria2 = this.resultadoCategoria2
  this.crudService.unArticulo.resultadoCategoria3 = this.resultadoCategoria3
  this.crudService.unArticulo.resultadoCategoria4 = this.resultadoCategoria4
  this.crudService.unArticulo.resultadoCategoria5 = this.resultadoCategoria5
  this.crudService.unArticulo.resultadoCategoria6 = this.resultadoCategoria6
  this.crudService.unArticulo.resultadoCategoria7 = this.resultadoCategoria7
  this.crudService.unArticulo.resultadoCategoria8 = this.resultadoCategoria8
  this.crudService.unArticulo.resultadoCategoria9 = this.resultadoCategoria9
  this.crudService.unArticulo.resultadoCategoria10 = this.resultadoCategoria10
  this.crudService.unArticulo.resultadoCategoria11 = this.resultadoCategoria11
  this.crudService.unArticulo.resultadoCategoria12 = this.resultadoCategoria12

  
  this.crudService.unArticulo.resultadoImagen = this.resultadoImagen
  this.crudService.unArticulo.resultadoImagen2 = this.resultadoImagen2
  this.crudService.unArticulo.resultadoImagen3 = this.resultadoImagen3
  this.crudService.unArticulo.resultadoImagen4 = this.resultadoImagen4
  this.crudService.unArticulo.resultadoImagen5 = this.resultadoImagen5
  this.crudService.unArticulo.resultadoImagen6 = this.resultadoImagen6
  this.crudService.unArticulo.resultadoImagen7 = this.resultadoImagen7
  this.crudService.unArticulo.resultadoImagen8 = this.resultadoImagen8
  this.crudService.unArticulo.resultadoImagen9 = this.resultadoImagen9
  this.crudService.unArticulo.resultadoImagen10 = this.resultadoImagen10
  this.crudService.unArticulo.resultadoImagen11 = this.resultadoImagen11
  this.crudService.unArticulo.resultadoImagen12 = this.resultadoImagen12
     

  this.crudService.unArticulo.resultadoID = this.resultadoID
  this.crudService.unArticulo.resultadoID2 = this.resultadoID2
  this.crudService.unArticulo.resultadoID3 = this.resultadoID3
  this.crudService.unArticulo.resultadoID4 = this.resultadoID4
  this.crudService.unArticulo.resultadoID5 = this.resultadoID5
  this.crudService.unArticulo.resultadoID6 = this.resultadoID6
  this.crudService.unArticulo.resultadoID7 = this.resultadoID7
  this.crudService.unArticulo.resultadoID8 = this.resultadoID8
  this.crudService.unArticulo.resultadoID9 = this.resultadoID9
  this.crudService.unArticulo.resultadoID10 = this.resultadoID10
  this.crudService.unArticulo.resultadoID11 = this.resultadoID11
  this.crudService.unArticulo.resultadoID12 = this.resultadoID12
     
     
     
      this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)    
      

  

    if( this.crudService.unArticulo._id && this.crudService.unArticulo._id !=="62902088b69caf0a51c7e023" )//porque est id es un registro en blanco que se usa para crear un nuevo articulo
    {  
      console.log(this.crudService.unArticulo._id,'antes de Modificar')
      this.crudService.unArticulo.contadorComentarios = "NO"    
      this.crudService.modificarArticulo(this.crudService.unArticulo)
      
    .subscribe(res => { this.crudService.snack('Modificado!')
    
  });
   
  }
    else  {
      this.crudService.unArticulo.contadorComentarios = "NO"    
        this.crudService.unArticulo.fecha = String(this.fechaPublicacion) 
        this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion) 
        this.crudService.unArticulo.vistas = 0
        this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)
        console.log(this.crudService.unArticulo,'antes de guardar')
        this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => { this.crudService.snack(res)
        this.pedirArticulos()
          
        })
  }
  
  };
  

  

eliminarArticulo(id:any){
this.crudService.deleteArticulo(id).subscribe(res =>{this.crudService.snack(res);
this.pedirArticulos(); 
this.activo = true;})
}


editarArticulo(articulos:Articulos){

this.crudService.unArticulo = articulos
this.categoria = this.crudService.unArticulo.categoria
this.titulo = this.crudService.unArticulo.titulo
this.subtitulo = this.crudService.unArticulo.subtitulo
this.autor = this.crudService.unArticulo.autor 
this.fecha = String(this.crudService.unArticulo.fecha)
this.fotografia = this.crudService.unArticulo.fotografia 
this.edicionFotografia = this.crudService.unArticulo.edicionFotografia
this.nota = this.crudService.unArticulo.nota
this.crudService.unArticulo.art1 = this.resultadoTitulo
this.crudService.unArticulo.art2 = this.resultadoTitulo2
this.crudService.unArticulo.art3 = this.resultadoTitulo3
this.crudService.unArticulo.art4 = this.resultadoTitulo4
this.crudService.unArticulo.art5 = this.resultadoTitulo5
this.crudService.unArticulo.art6 = this.resultadoTitulo6
this.crudService.unArticulo.art7 = this.resultadoTitulo7
this.crudService.unArticulo.art8 = this.resultadoTitulo8
this.crudService.unArticulo.art9 = this.resultadoTitulo9
this.crudService.unArticulo.art10 = this.resultadoTitulo10
this.crudService.unArticulo.art11 = this.resultadoTitulo11
this.crudService.unArticulo.art12 = this.resultadoTitulo12

this.posicion = this.crudService.unArticulo.posicion




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
  this.posicion = 0
}

//esta es para cuando se clickea en un input de articulos relacionadas modifique esta misma. 
selection(res){
  this.aux = res
  
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
    this.imagen1  = String(link) ;
     
     
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



