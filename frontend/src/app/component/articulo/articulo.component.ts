import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) { }
  nota:any

  ngOnInit(): void {

    this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
      
})
  }



  
  saltos(data){

     var aux2 = data.split('<img ').join('<img style="width:100%;"')
     

    console.log(aux2)
    return (aux2)


   };
 
}
