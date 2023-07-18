import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars: Car[];

  constructor(private carService: CarService, private router: Router ){}

  ngOnInit(): void {
    this.getCars();
  }

  /*ngOnInit(): void{
    this.cars = [{
      "id": 2,
      "Marca": "Fiat",
      "Colore": "Rosso",
      "Carburante": "Elettrico"
    }];
  }*/

  private getCars(){
    this.carService.getCarsList().subscribe(data => {
      this.cars = data;
    });
  }

  carDetails(id: number){
    this.router.navigate(['car-details', id]);
  }

  updateCar(id: number){
    this.router.navigate(['update-car', id]);
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log(data);
      this.getCars();
    })
  }
  
}
