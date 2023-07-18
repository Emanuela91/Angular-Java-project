import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars: Car[];

  constructor(private carService: CarService ){}

  ngOnInit(): void {
    this.getCars();
  }

  private getCars(){
    this.carService.getCarsList().subscribe(data => {
      this.cars = data;
    });
  }
  
  /*ngOnInit(): void{
    this.cars = [{
      "id": 2,
      "Marca": "Fiat",
      "Colore": "Rosso",
      "Carburante": "Elettrico"
    }];
  }*/
}
