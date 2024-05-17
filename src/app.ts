import express from 'express';
import healthRouter from './health/routes';

import 'dotenv/config';

const app = express();

const router = express.Router();

router.use('/health-check', healthRouter);

app.use(router);

export default app;
