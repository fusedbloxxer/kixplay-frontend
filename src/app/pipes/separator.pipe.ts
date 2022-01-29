import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
})
export class SeparatorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
