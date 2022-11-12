const express = require('express');
const { routerApi } = require('./routes');

const app = express();
routerApi(app);

app.listen(3000, () => {
  console.log('app up on port 3000');
});
