import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToString'
})
export class ObjectToStringPipe implements PipeTransform {

  transform(value: any): string {
    return "Country : " + value?.country?.name + ".Bank : " + value?.bank?.name
  }

}
