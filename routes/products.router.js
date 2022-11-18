const express = require('express');
const { ProductsService } = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  res.json({ product });
});

router.post('/', (req, res) => {
  const { body } = req;

  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const product = service.update(id, body);
  res.json({ message: 'update', data: product });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteId = service.delete(id);
  res.json({ message: 'deleted', deleteId });
});

module.exports = router;
