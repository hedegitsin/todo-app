import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialLettersUpperCase'
})
export class InitialLettersUpperCasePipe implements PipeTransform {

  transform(value: string[]): string {
    return value.map(v => v.substring(0,1).toLocaleUpperCase()).join('');
  }

}
