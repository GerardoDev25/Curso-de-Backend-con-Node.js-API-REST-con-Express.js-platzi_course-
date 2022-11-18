const express = require('express');
const cors = require('cors');

const { routerApi } = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handle');

const whileList = ['http://localhost:8080', 'https://mydomain.dev'];
const options = {
  origin: (origin, callback) => {
    if (whileList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

const app = express();

app.use(express.json());
app.use(cors(options));
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('app up on port 3000');
});
