import express from 'express';
import cors from 'cors';
import { distanceDialingCostRouter } from './infrastructure/DistanceDialingCostRouter';
import { keepTalkingDiscountRouter } from './infrastructure/KeepTalkingDiscountRouter';

const app = express();
const PORT = 3001;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(keepTalkingDiscountRouter);
app.use(distanceDialingCostRouter);

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`running at ${HOST}:${PORT}`);
});
