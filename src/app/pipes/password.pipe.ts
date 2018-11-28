import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, status: boolean): any {
    return (status ? value.replace(/./gi, '#') : value);
  }

}
