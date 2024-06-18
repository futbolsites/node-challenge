import express from 'express';
const bodyParser = require('body-parser');
import healthRouter from './health/routes';

import 'dotenv/config';

const app = express();
app.use(bodyParser.json());

const router = express.Router();

router.use('/health-check', healthRouter);

app.use(router);

export default app;
