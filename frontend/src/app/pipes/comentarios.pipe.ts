import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comentarios'
})
export class ComentariosPipe implements PipeTransform {


  transform(value:any, args:any): any {
    const resultPost2 =  [];

    for(var post of value){
      var aux = post.contadorComentarios + ' ' + post._id
          if (aux.indexOf('Nuevo') > -1 )

      {
        resultPost2.push(post) 
      }

    }
    console.log(resultPost2)

    return resultPost2;
  }

}
