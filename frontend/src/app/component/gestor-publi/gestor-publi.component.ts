import { Component, OnInit } from '@angular/core';
import { Publicidad } from 'src/app/models/publicidad';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-gestor-publi',
  templateUrl: './gestor-publi.component.html',
  styleUrls: ['./gestor-publi.component.css']
})
export class GestorPubliComponent implements OnInit {

  publicidad =  Publicidad;

   fecha = new Date()
    public imagen1 ="hola"
    public formulario:Publicidad
  constructor(public crudService:CrudService) {
      
  }

  ngOnInit(): void {
        this.crudService.getPublicidad().subscribe(res=> {
      // this.publicida = res as Publicidad

    })
  }



  guardarCambios(){
  this.crudService.unPublicidad.imagen1 = this.imagen1
    

  this.formulario.imagen1= this.imagen1 
    
    

   this.crudService.addPublicidad(this.crudService.unPublicidad).subscribe(res=>{console.log(res)})


  }

}
