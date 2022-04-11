
import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs';
import { BuscadorObservableService } from 'src/app/service/buscador-observable.service';
import { LoadingObservableService } from 'src/app/service/loading-observable.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
public color = "rgb(33,33,33)"



  constructor(private oservable:BuscadorObservableService, private observableLoading:LoadingObservableService) { }

  ngOnInit(): void {

  }



  pasar(va){
    
    this.oservable.buscarString$.emit(this.buscar)


  }

  loading(){

    this.observableLoading.loading$.emit(true)
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      console.log('observa',term)
      
    });
  }

}
