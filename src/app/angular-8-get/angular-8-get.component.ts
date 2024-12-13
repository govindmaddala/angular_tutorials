import { Component } from '@angular/core';

interface user {
  name: string,
  age: number
}

@Component({
  selector: 'app-angular-8-get',
  imports: [],
  templateUrl: './angular-8-get.component.html',
  styleUrl: './angular-8-get.component.css'
})
export class Angular8GetComponent {
  details: user = {
    name: '',
    age: 0
  };
  get userDetails(){
    this.details.age = 29;
    this.details.name = "govind"
    return this.details;
  }

}
