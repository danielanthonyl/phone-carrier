import express from 'express';
import { KeepTalkingDiscountEntity } from './domain/Entities/KeepTalkingDiscountEntity';

const app = express();
const PORT = 3001;
const HOST = '0.0.0.0';

const news = new KeepTalkingDiscountEntity({
  name: 'asd',
  maxMinutes: 12,
});
const news2 = new KeepTalkingDiscountEntity({
  name: 'asd',
  maxMinutes: 12,
});

console.log({ news, news2 });

app.use(express.json());

app.listen(PORT, HOST, () => {
  console.log(`running at ${HOST}:${PORT}`);
});
