const express = require('express');
const { routerApi } = require('./routes');
const { errorHandle, logErrors } = require('./middleware/error.handle');

const app = express();

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(errorHandle);

app.listen(3000, () => {
  console.log('app up on port 3000');
});
