import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs';
import { BuscadorObservableService } from 'src/app/service/buscador-observable.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""

public color = "rgb(33,33,33)"



  constructor(private oservable:BuscadorObservableService) { }

  ngOnInit(): void {

  }

  pasar(va){
    console.log(this.buscar)
    this.oservable.buscarString$.emit(this.buscar)


  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      console.log('observa',term)
      
    });
  }

}
