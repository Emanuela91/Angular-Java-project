package Springboot.cars.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Springboot.cars.exception.ResourceNotFoundException;
import Springboot.cars.model.Car;
import Springboot.cars.repository.CarRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")


public class CarController {
    @Autowired
	private CarRepository carRepository;
	
	// get all cars
	@GetMapping("/cars")
	public List<Car> getAllCars(){
		return carRepository.findAll();
	}		
	
	// create car rest api
	@PostMapping("/cars")
	public Car createCar(@RequestBody Car car) {
		return carRepository.save(car);
	}
	
	// get car by id rest api
	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable Long id) {
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("car not exist with id :" + id));
		return ResponseEntity.ok(car);
	}
	
	// update car rest api
	
	@PutMapping("/cars/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carDetails){
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("car not exist with id :" + id));
		
		car.setmarca(carDetails.getmarca());
		car.setcolore(carDetails.getcolore());
		car.setcarburante(carDetails.getcarburante());
		
		Car updatedcar = carRepository.save(car);
		return ResponseEntity.ok(updatedcar);
	}
	
	// delete car rest api
	@DeleteMapping("/cars/{id}")
	public ResponseEntity<Map<String, Boolean>> deletecar(@PathVariable Long id){
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("car not exist with id :" + id));
		
		carRepository.delete(car);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

