export class Articulos {

    constructor(art1='', art2='', art3='', art4='', art5='', art6='', _id ='', fecha ='',fechaMod ='', titulo='', tituloAlt='', tituloImagen='', subtitulo='', nota='', imagen1='', imagen2=''
    ,imagen3='',fotografia='', edicionFotografia='',autor='', likes=0,categoria='', vistas=0,hash='' ){

//    this.resultadoTitulo = resultadoTitulo
//    this.resultadoTitulo2 = resultadoTitulo2
//    this.resultadoTitulo3 = resultadoTitulo3
//    this.resultadoTitulo4 = resultadoTitulo4
//    this.resultadoTitulo5 = resultadoTitulo5
//    this.resultadoTitulo6 = resultadoTitulo6


this.art1 =  art1
this.art2 =  art2
this.art3 =  art3
this.art4 =  art4
this.art5 =  art5
this.art6 =  art6



this._id = _id;
this.fecha = fecha
this.fechaMod = fechaMod
this.titulo = titulo
this.tituloAlt = tituloAlt
this.subtitulo = subtitulo
this.nota = nota
this.imagen1 = imagen1
this.imagen2 = imagen2
this.imagen3 = imagen3
this.fotografia = fotografia
this.edicionFotografia = edicionFotografia
this.autor = autor
this.categoria = categoria
this.vistas = vistas
this.imagen3 =imagen3
this.likes = likes
this.tituloImagen = tituloImagen
this.hash = hash

    }


    

    id: number;
    marginLeft?:number;

    _id: string
    fecha:string;
    fechaMod:string;

    art1:string;
    art2:string;
    art3:string;
    art4:string;
    art5:string;
    art6:string;
    

    
    titulo:string;
    tituloAlt:string;
    subtitulo:string;
    hash:string;
    nota:string;
    imagen1:string;
    imagen2:string;
    imagen3:string;
    fotografia:string;
    edicionFotografia:string;
    autor:string;

    categoria:string;
    likes:number;
    vistas:number;
    tituloImagen:string;
}



