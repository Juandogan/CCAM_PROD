import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editor-comentarios',
  templateUrl: './editor-comentarios.component.html',
  styleUrls: ['./editor-comentarios.component.css']
})
export class EditorComentariosComponent implements OnInit {
nota:any
comen:any
  constructor(public crudService:CrudService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {

    this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
    
     
      this.comen = this.nota[0].comentarios.split("<hr>").reverse()
      // this.comen.shift()
console.log(this.comen)
          
    })


    

  }


  eliminar(x){
    
    var aux = this.comen[x].split()
   console.log(aux)
    // this.comen = []
    // this.comen.push(aux)

          console.log(this.comen)

        // this.comen.push(aux)

    


  }
}
