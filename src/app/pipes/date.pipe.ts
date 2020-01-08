import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna): any[] {
    if (texto === '') {
      return arreglo
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(item =>{
      return item.title.toLowerCase().includes(texto)
    })
    
  }

}
