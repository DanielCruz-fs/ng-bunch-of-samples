import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    let newWord = value.toLowerCase();
    let userName = newWord.split(' ');
    if (all) {
      for (const key in userName) {
        userName[key]  = userName[key].substring(0, 1).toUpperCase() + userName[key].substring(1); 
      }
    }else {
      userName[0]  = userName[0].substring(0, 1).toUpperCase() + userName[0].substring(1);
    }
    
    return userName.join(' ');  
  }
}