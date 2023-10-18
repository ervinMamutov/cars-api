import carsBase from '../dataBase/carsBase.js';
const cars = carsBase;

class Cars {
  constructor(carInfo) {
    this.carInfo = carInfo;
  }

  addCar() {
    return cars.push(this);
  }

  static getCars = () => {
    return cars;
  };

  static getCarById = (id) => {
    return cars.find((car) => car.id === id);
  };

  static updateCar(updateCarInfo) {
    const id = updateCarInfo.id;
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return false;
    } else {
      cars[index] = { id, ...updateCarInfo };
      return true;
    }
  }

  static deleteCar(id) {
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return false;
    } else {
      cars.splice(index, 1);
    }
  }
}

export default Cars;
