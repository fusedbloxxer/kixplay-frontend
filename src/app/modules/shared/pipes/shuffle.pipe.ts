import { Pipe, PipeTransform } from '@angular/core';
import { sample, sampleSize } from 'lodash';

@Pipe({
  name: 'shuffle',
})
export class ShufflePipe implements PipeTransform {
  transform(value: unknown[], count: number): unknown[] {
    return sampleSize(value, Math.min(value.length, count));
  }
}
