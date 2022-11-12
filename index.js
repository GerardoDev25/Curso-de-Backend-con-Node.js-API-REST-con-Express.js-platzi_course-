// const express = require('express');

// const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');

// function routerApi(app) {
//   const router = express.Router();
//   app.use('/api/v1', router);
//   router.use('/products', productsRouter);
//   router.use('/categories', categoriesRouter);
//   router.use('/users', usersRouter);
// }

// module.exports = routerApi;

const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('sdfkhsdfjksdfnskjdfhkdjhdfkjshdfksdfhksafejhreraivbhy');
});

app.listen(3000, () => {
  console.log('app up');
});
