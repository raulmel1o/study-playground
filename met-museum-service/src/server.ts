import express from 'express';
import actuator from 'express-actuator';

const app = express();
app.use(express.json());
app.use(actuator());

export default app;