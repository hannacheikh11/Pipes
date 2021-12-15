import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meses'
})
export class MesesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = parseInt(value);
    if (args != null)
      if (args =="español")
    switch (value) {
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8:return 'Agusto'
      case 9:return 'Septiembre'
      case 10:return 'Octobre'
      case 11:return 'Noviembre'
      case 12:return 'Diciembre'

    }
    if (args=='frances')
        switch (value) {
          case 1: return 'Janvier ';
          case 2: return 'Février';
          case 3: return 'Mars';
          case 4: return 'Avril ';
          case 5: return 'Mai';
          case 6: return 'Juin';
          case 7: return 'Jullet';
          case 8: return 'Août';
          case 9: return 'Septembre';
          case 10:return 'Octobre';
          case 11:return 'Novembre';
          case 12:return 'Décembre';


        }

        if (args=='inglish')
        switch (value) {
          case 1: return 'January ';
          case 2: return 'Februry';
          case 3: return 'March';
          case 4: return 'April ';
          case 5: return 'May';
          case 6: return 'June';
          case 7: return 'July';
          case 8: return 'August';
          case 9: return 'September';
          case 10:return 'October';
          case 11:return 'November';
          case 12:return 'December';


        }
        return null;

    }
  }





