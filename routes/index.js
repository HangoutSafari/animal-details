import express, { Router } from 'express';
import cors from 'cors';
import { getAllAnimalDetails, getAnimalDetails } from '../controllers/animalDetailsViaSupabase.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json("it's working :3 ");
});

router.options('/animalDetails', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });

    // response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/animalDetails/', cors(), getAllAnimalDetails);
router.get('/animalDetails/:id', cors(), getAnimalDetails);

export default router;
