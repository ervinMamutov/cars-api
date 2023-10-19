import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';
import carRoutes from './routes/carRouter.js';
import logger from './middleware/logger.js';

// initialization PORT
dotenv.config();
const PORT = process.env.PORT || 3008;

// contractor pass

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// set static folder
app.use(express.static(path.join(PATH, 'public')));

// add middleware
app.use('/api/cars', carRoutes);
app.use(logger);

app.use((req, res) => {
  res.status(404).render('404', {
    title: '404',
    message: 'Car not Found',
    img: '/img/404.png'
  });
});

// add listener

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
