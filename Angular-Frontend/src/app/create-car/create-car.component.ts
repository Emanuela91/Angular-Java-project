import { Component } from '@angular/core';
import { Car } from '../car';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  car: Car = new Car();
  constructor() {}

  ngOnInit(): void{

  }

  onSubmit(){
    console.log(this.car)
  }
}
