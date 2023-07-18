package Springboot.cars.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Springboot.cars.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>{

}