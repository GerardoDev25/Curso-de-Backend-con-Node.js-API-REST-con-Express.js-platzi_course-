const express = require('express');
const { routerApi } = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handle');

const app = express();

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(3000, () => {
  console.log('app up on port 3000');
});
