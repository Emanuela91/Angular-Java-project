import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';

const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: 'create-car', component: CreateCarComponent},
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'update-car/:id', component: UpdateCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
