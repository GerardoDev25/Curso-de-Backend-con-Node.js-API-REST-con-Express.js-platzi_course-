const express = require('express');

const app = express()

const productsRouter = require('./routes/products.router');
const categoriesRouter = require('./routes/categories.router');
const usersRouter = require('./routes/users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

routerApi(app)
app.listen(3000,()=>{
  console.log('server up port 3000');
})

// module.exports = routerApi;

// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   res.send('sdfkhsdfjksdfnskjdfhkdjhdfkjshdfksdfhksafejhreraivbhy');
// });

// app.listen(3000, () => {
//   console.log('app up');
// });
