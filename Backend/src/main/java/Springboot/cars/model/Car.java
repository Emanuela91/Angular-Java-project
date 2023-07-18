package Springboot.cars.model;

import jakarta.persistence.*;

@Entity
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "marca")
    private String marca;

    @Column(name = "colore")
    private String colore;

    @Column(name = "carburante")
    private String carburante;

    public Car() {

    }

    public Car(String marca, String colore, String carburante) {
        this.marca = marca;
        this.colore = colore;
        this.carburante = carburante;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getmarca() {
        return marca;
    }

    public void setmarca(String marca) {
        this.marca = marca;
    }


    public String getcolore() {
        return colore;
    }

    public void setcolore(String colore) {
        this.colore = colore;
    }


    public String getcarburante() {
        return carburante;
    }

    public void setcarburante(String carburante) {
        this.carburante = carburante;
    }
}
