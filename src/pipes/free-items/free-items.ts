import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FreeItemsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'freeItems',
})
export class FreeItemsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: Array<any>) {

    console.log(items);
    if (!items) {
      console.log('false');
      return items;
    }
    console.log('items : ' + items);
    console.log('afterpipe : ' + items.filter(item => item.price === 0));
    return items.filter(item => item.price === 0);
  }
}
