import carsBase from '../dataBase/carsBase.js';
import Cars from '../models/Cars.js';

const carsController = {
  getCars: (req, res) => {
    const cars = Cars.getCars();
    res.status(200).render('carsBase', { carsBase: cars });
  },
  addCars: (req, res) => {
    const carInfo = req.body;
    const car = new Cars(carInfo);
    car.addCar();
    res.status(201).json(car);
  },
  updateCar: (req, res) => {
    const updateCarInfo = req.body;
    const carExist = Cars.updateCar(updateCarInfo);
    if (carExist) {
      res.status(201).json({ message: 'Car has been update successfully ' });
    } else {
      res.status(404).json({ message: `Car does not exist` });
    }
  },
  deleteCar: (req, res) => {
    const carInfo = Cars.deleteCar();
    console.log(carInfo);
    carInfo
      ? res.status(200).json(carInfo)
      : res.status(500).json({ message: `Car don't found` });
  }
};

export default carsController;
