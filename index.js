import Express from 'express';
import routerApi from './routes/index.js';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from './middleware/error.handlers.js';
import cors from 'cors';
const app = Express();
const port = process.env.PORT || 3000;
app.use(Express.json());

const whiteList = [
  'http://localhost:8080',
  'https://myapp.co',
  'http://localhost:3000',
  'http://127.0.0.1:5500'
];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {

      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('hola mi server');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
