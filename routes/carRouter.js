import express from 'express';
import carsController from '../controllers/carsController.js';

const router = express.Router();

router.get('/', carsController.getCars);
router.post('/add-car', carsController.addCars);
router.put('/update/:id', carsController.updateCar);
router.delete('/delete-car/:id', carsController.deleteCar);

export default router;
