import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from 'src/app/ckeditor2';
import { CrudService } from 'src/app/service/crud.service';
 
 
 


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  @Input('data') data : any ;

  @Input('art') art:any;
  @Input('id') id:any;

  public loader = true
  public myEditor:any
  public nota:string = "";
  public editorShow=true


   public editorConfig = {  

     simpleUpload: {
       // The URL that the images are uploaded to.
       uploadUrl: "http://168.197.50.191/upload2",
          // Headers sent along with the XMLHttpRequest to the upload server.
       headers: {
         'X-CSRF-TOKEN': 'CSFR-Token',
         Authorization: 'Bearer <JSON Web Token>'
       }
     }
    
   };

     public Editor = ClassicEditor;   

     public onReady( editor:any ) {
         editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );}



  constructor(public crudService:CrudService) { }

  ngOnInit(): void {

    this.Editor.create( document.querySelector( '.document-editor__editable' ), { 
    
     
  link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,
         
           

        },


      simpleUpload: {
      uploadUrl: "http://168.197.50.191/upload2",
         
      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }

    }
          } )
  
          .then( editor => {
     
      const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      this.myEditor = editor
       
  } )
  .catch( err => {
      console.error( err );
  } );

  }

  comprobarCambios(){
    var aux = this.myEditor.getData() 
    if ( aux  = this.crudService.unArticulo.nota ){
      console.log('sin cambios')

    }else { console.log('hay cambios')}

 
  }

  
agregarPublicacion(){
  this.crudService.unArticulo.nota = this.myEditor.getData() 
    // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
    if( this.id )
    {
    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {this.loader = true; this.crudService.snack("MODIFICADO!")});
    // window.location.href = 'http://168.197.50.191/gestor'
    }
      else  {
       this.crudService.unArticulo.vistas = 0
      //  this.crudService.unProducto.fecha = String(this.fachaPublicacion)
         this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => { this.loader = true; this.crudService.snack("Guardado!")
        //  window.location.href = 'http://168.197.50.191/gestor'
        })
    }
  };

  scrollCenter(){
    window.scroll(0,165)
  }
  scrollReset(){
    window.scroll(0,0)
  }
}
