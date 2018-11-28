import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-examples';
  name: string = 'Daniel';
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  earnings: number = 0.234;
  salary: number = 1234.5;
  myLove = {
    name: 'Kathya',
    lastnname: 'Villa Alanoca',
    age: 'unknown',
    location: {
      address: 'Cascada Acribol',
      hint: 'Puente Pro-Mujer'
    }
  };
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`I will kiss kathya's lips again.`), 4000);
  });
  myDate = new Date();
  messyName: string = 'dAnIel CrUz cAlANi';
  myFavMovie: string = 'OUS--2gt1As';
  myPassword: string = 'kathyateamo';
  passwordState: boolean = true;
  
  togglePassword() {
    this.passwordState = !this.passwordState;
  }
}
