import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  static orderByComparator(a: any, b: any): number {
    if (parseFloat(a) < parseFloat(b)) {
      return -1;
    }
    if (parseFloat(a) > parseFloat(b)) {
      return 1;
    }
    return 0;
  }

  transform(input: any, [config = '+']): any {

    if (!Array.isArray(input)) {
      return input;
    }

    if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
        const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
        const desc = propertyToCheck.substr(0, 1) === '-';

        if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+'){
            return !desc ? input.sort() : input.sort().reverse();
        } else {
            const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                ? propertyToCheck.substr(1)
                : propertyToCheck;

            return input.sort(function(a: any,b: any){
                return !desc
                    ? SortPipe.orderByComparator(a[property], b[property])
                    : -SortPipe.orderByComparator(a[property], b[property]);
            });
        }
    } else {
        return input.sort(function(a: any, b: any) {
            for (let i = 0; i < config.length; i++) {
                const desc = config[i].substr(0, 1) === '-';
                const property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                    ? config[i].substr(1)
                    : config[i];

                const comparison = !desc
                    ? SortPipe.orderByComparator(a[property], b[property])
                    : -SortPipe.orderByComparator(a[property], b[property]);

                if (comparison !== 0) {
                  return comparison;
                }
            }

            return 0;
        });
    }
}

}
