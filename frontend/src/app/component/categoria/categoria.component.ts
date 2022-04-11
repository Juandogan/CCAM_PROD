import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Location } from '@angular/common';
import { LoadingObservableService } from 'src/app/service/loading-observable.service';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria:any
  constructor(private ruta:ActivatedRoute, 
    public crudService:CrudService,
    private location: Location,
    private observableLoading:LoadingObservableService
    ) { 

    
  }
  nota:any;
  aux:any;

  ngOnInit(): void {
    
    this.observableLoading.loading$.subscribe(res => {
      this.aux = res})
     
    window.scroll(0,0)
     

    this.ruta.data.subscribe((data:any)=>{this.nota = data.data; console.log(this.nota)})
  
    this.ruta.params.subscribe(params=>{this.categoria = params['categoria'];
    
    
      this.observableLoading.loading$.emit(false)
  
    


  })
    

  }
}