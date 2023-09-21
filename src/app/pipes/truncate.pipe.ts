import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, threshold?: number): string {
    threshold = threshold ?? 20;

    if (value.length <= threshold)
      return value;

    return value.substring(0, threshold) + '...';
  }
}
