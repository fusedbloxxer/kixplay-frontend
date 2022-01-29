import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
})
export class SeparatorPipe implements PipeTransform {
  transform(value: string, separator: string = '-'): string {
    return value
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, separator);
  }
}
