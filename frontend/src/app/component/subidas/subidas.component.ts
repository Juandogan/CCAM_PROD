import { Component, OnInit,  } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Articulos } from '../../models/articulos';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-subidas',
  templateUrl: './subidas.component.html',
  styleUrls: ['./subidas.component.css']
})
export class SubidasComponent implements OnInit {

  productos: Articulos[]=[];
  public uploadedFiles: Array<File> = [];
  public path : any;
  public loading:boolean = true;
  public loading2:boolean = false;
  public loading3:boolean = false;
  public loading4:boolean = false;
  public loading5:boolean = false;
  public publi2: any ;
  public filtro: any ;
  public value:any;
  public fachaPublicacion =new Date();
  public ocultar=true;
  public ocultar2=true;


tituloShow=false;
subtituloShow=false;
descripcionShow=false;

imagenShow=false;
archivoShow=false;
tituloImagenShow = false;


fuenteShow=false;
autorShow=false;
fechaShow=false;
horaShow=false;
lugarShow=false;
abstractShow=false;


filtro_valor = ''

buscar(value: string){
  this.filtro_valor = value;

};
    constructor(public crudService:CrudService, private location: LocationStrategy) {


    }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.pedirProductos();


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

    pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.


   
      // falta agregar loading

                } //fin de pedirProductos

     publiForm(data){
      this.publi2 = data

        }

    openEditor(value):void{

      
     


          switch (value) {


            case 'Lateral':
              this.tituloShow=true;
              this.subtituloShow=true;
              this.imagenShow=true;
              this.archivoShow=true;
              this.descripcionShow =true;
              this.autorShow=true;
             this.tituloImagenShow = true;
             this.fechaShow =true
             break;
            case 'Musica':
              this.tituloShow=true;
              this.subtituloShow=true;
              this.imagenShow=true;
              this.archivoShow=true;
              this.descripcionShow =true;
              this.autorShow=true;
             this.tituloImagenShow = true;
             this.fechaShow =true
             break;
               case 'Radios':
                this.cerrarForm()
                this.tituloShow=true;
                this.subtituloShow=true;
                this.imagenShow=true;
                this.archivoShow=true;
                this.descripcionShow =true;
                this.autorShow=true;
                this.tituloImagenShow = true;
                this.fechaShow = true;
                  break;

            case 'Nota':
             this.tituloShow=true;
             this.subtituloShow=true;
             this.imagenShow=true;
             this.archivoShow=true;
             this.descripcionShow =true;
             this.autorShow=true;
            this.tituloImagenShow = true;
            this.fechaShow =true
                break;
                case 'Talleres':
                  this.fechaShow =true
                  this.tituloShow=true;
                  this.subtituloShow=true;
                  this.imagenShow=true;
                  this.archivoShow=true;
                  this.descripcionShow =true;
                  this.autorShow=true;
                 this.tituloImagenShow = true;
                     break;

                case 'Institucional':
                  this.fechaShow =true
                  this.tituloShow=true;
                  this.subtituloShow=true;
                  this.imagenShow=true;
                  this.archivoShow=true;
                  this.descripcionShow =true;
                  this.autorShow=true;
                 this.tituloImagenShow = true;
                     break;


                case 'Libros':
                this.tituloShow=true;
                this.subtituloShow=true;
                this.imagenShow=true;
                this.archivoShow=true;
                this.descripcionShow =true;
                this.autorShow=true;
               this.tituloImagenShow = true;
               this.fechaShow =true
                   break;

                   case 'Musica':
                   this.tituloShow=true;
                   this.subtituloShow=true;
                   this.imagenShow=true;
                   this.archivoShow=true;
                   this.descripcionShow =true;
                   this.autorShow=true;
                  this.tituloImagenShow = true;
                  this.fechaShow =true
                      break;
                      case 'Portada':
                      this.tituloShow=true;
                      this.subtituloShow=true;
                      this.imagenShow=true;
                      this.archivoShow=true;
                      this.descripcionShow =true;
                      this.autorShow=true;
                     this.tituloImagenShow = true;
                     this.fechaShow =true
                         break;


            default:
                console.log("No such day exists!");
                break;
        }
      }


            cerrarForm(){


        this.tituloShow=false;
        this.subtituloShow=false;
        this.descripcionShow=false;
        this.imagenShow=false;
        this.archivoShow=false;

        this.fuenteShow=false;
        this.autorShow=false;
        this.fechaShow=false;
        this.horaShow=false;
        this.lugarShow=false;
        this.abstractShow=false;
        this.fechaShow =false

            }

        resetForm(form){
         form.reset()


        };

        onUpload(){
         let formData = new FormData();
          for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

            formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

          }
          this.crudService.uploadFile(formData).subscribe(res => {
            var ass  = String(res);
            this.crudService.unArticulo.imagen1 = ass ;

            console.log(ass);
            this.ocultar2 = false
            this.loading2=false;
            this.loading3=true;
          })

        };

        onUpload2(){
          let formData = new FormData();
           for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

             formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

           }
           this.crudService.uploadFile(formData).subscribe(res => {
             var ass  = String(res);
             this.crudService.unArticulo.imagen2 = ass ;

             this.ocultar=false
             this.loading4=false;
             this.loading5=true;
           })

         };

        onFileChange(e){

          this.uploadedFiles = e.target.files;
        };

        borrarProducto(producto){}




  }
