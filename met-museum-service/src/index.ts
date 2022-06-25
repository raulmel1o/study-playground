import express from 'express';
import actuator from 'express-actuator';

const app = express();

app.use(actuator());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is running');
});
