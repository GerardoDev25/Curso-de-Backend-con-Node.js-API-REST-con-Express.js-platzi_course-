const express = require('express');

const { ProductsService } = require('../services/product.service');
const { validatorHandle } = require('../middleware/validatorHandle');
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get(
  '/:id',
  validatorHandle(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);

      res.json({ product });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandle(createProductSchema, 'body'),
  async (req, res) => {
    const { body } = req;

    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandle(getProductSchema, 'params'),
  validatorHandle(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const product = await service.update(id, body);
      res.json({ message: 'update', data: product });
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteId = await service.delete(id);
    res.json({ message: 'deleted', deleteId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
