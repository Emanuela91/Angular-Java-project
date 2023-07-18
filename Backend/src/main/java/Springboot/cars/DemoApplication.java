package Springboot.cars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"src.main.java.Springboot.cars.controller"})
@ComponentScan(basePackages = {"src.main.java.Springboot.cars.exception"})
@ComponentScan(basePackages = {"src.main.java.Springboot.cars.model"})
@ComponentScan(basePackages = {"src.main.java.Springboot.cars.repository"})


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
