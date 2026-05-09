import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('JWT Auth API running');
});

app.use('/api/v1/reviews',reviews);
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
