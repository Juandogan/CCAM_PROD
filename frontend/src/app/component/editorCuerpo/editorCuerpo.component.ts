import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editorCuerpo',
  templateUrl: './editorCuerpo.component.html',
  styleUrls: ['./editorCuerpo.component.css']
})
export class EditorCuerpoComponent implements OnInit {
nota:any


test:Articulos = new Articulos 
  constructor(public crudService:CrudService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    

      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]); })
      this.crudService.unArticulo = this.nota[0]

          }

  };