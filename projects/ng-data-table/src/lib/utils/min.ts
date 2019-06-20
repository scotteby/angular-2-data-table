import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {
  transform(value: number[]): any {
    return Math.min.apply(null, value);
  }
}
