import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria:any
  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) { 

    
  }
  nota:any
  

  ngOnInit(): void {
    

    window.scroll(0,0)
     

    this.ruta.data.subscribe((data:any)=>{this.nota = data.data; console.log(this.nota)})
  
    this.ruta.params.subscribe(params=>{this.categoria = params['categoria']})
    

  }
}