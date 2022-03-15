import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-relacionado',
  templateUrl: './articulo-relacionado.component.html',
  styleUrls: ['./articulo-relacionado.component.css']
})
export class ArticuloRelacionadoComponent implements OnInit {
  @Input('data') nota : any ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.nota)
  }
  cut(value:any){
   var corte = value.slice(2)

  return corte
}; 

}
