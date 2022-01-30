import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, maxSize: number): string {
    if (!value.length) {
      return '';
    }

    // If the sentence is ending with a word finish it.
    const nextSpace = value.indexOf(' ', maxSize - 1);
    if (nextSpace === -1) {
      return value;
    }

    // Otherwise, shorten it and add dots.
    const output: string = value.slice(0, nextSpace);
    return output + '...';
  }
}
