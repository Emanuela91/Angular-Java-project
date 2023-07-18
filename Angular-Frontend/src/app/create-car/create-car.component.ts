import { Component } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  car: Car = new Car();
  constructor(private carService: CarService,
    private router: Router) {}

  ngOnInit(): void{

  }

  saveCar(){
    this.carService.createCar(this.car).subscribe(
      {
        next:data => console.log(data),
        error:error => console.log(error)
      },
    )
  }

  goToCarList(){
    this.router.navigate(['/cars']);
  }
  
  onSubmit(){
    console.log(this.car);
    this.saveCar();
  }
}
