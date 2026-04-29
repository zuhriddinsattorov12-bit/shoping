class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
    
    getDetails() {
      console.log(`${this.brand} ${this.model}`); 
    }
    
    start() {
      console.log('start engine'); 
    }
    
     stop() {
       console.log('stop engine');
     }
    maximizeSpeed() {
      console.log(`${this.model} reaches ${this.speed} km/h`);
    }
  }
  
  
  // Child class
  class Toyota extends Car {
    #fuel = 0;
    constructor(model, category, speed) {
      super('Toyota', model);
      this.category = category;
      this.speed = speed;
    }
    
    fillUpGasoline(a) {
      this.#fuel += a;
    }
  }
  
  class Tesla extends Car {
    #battery = 0;
    constructor(model, category, speed) {
      super('Tesla', 'Model S', 330);
      this.category = category;
      this.speed = speed;
    }
    chargePower(b) {
    this.#battery += b; 
  }
  }
  
  
  
  
  
  const myCar = new Toyota('Camry', 'sedan', 220);
  myCar.start();
  myCar.stop();
  myCar.getDetails();
  
  
  console.log("================");
  
  const yourCar = new Tesla('Model S', 'sedan', 330);
  yourCar.start();
  yourCar.stop();
  yourCar.getDetails();
  
  
  
  //Polimorphism:
  myCar.maximizeSpeed();
  yourCar.maximizeSpeed();
  yourCar.maximizeSpeed();
   