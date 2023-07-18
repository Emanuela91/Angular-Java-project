import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent implements OnInit {

  id: number;
  car: Car = new Car();
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe({
      next:data => {
        console.log(data)
        this.car = data
      },
      error:error => console.log(error),
      complete: () => console.log("Data init completed!")
    })
  }

  onSubmit(){
    this.updateCar();
  }


  updateCar(){
    this.carService.updateCar(this.id, this.car)
    .subscribe({
      next:data => console.log(data),
      error:error => console.log(error),
      complete:() => this.goToCarList()
    },)
  }

  goToCarList(){
    this.router.navigate(['/cars'])
  };

}





