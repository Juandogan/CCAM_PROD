import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bajo-portada',
  templateUrl: './card-bajo-portada.component.html',
  styleUrls: ['./card-bajo-portada.component.css']
})
export class CardBajoPortadaComponent implements OnInit {

  @Input('data') data : any ;


  constructor() { 


   }

  ngOnInit(): void {
 
  }

  cut(value:any){
    var corte = value.slice(2)
 
   return corte
 }; 

}
