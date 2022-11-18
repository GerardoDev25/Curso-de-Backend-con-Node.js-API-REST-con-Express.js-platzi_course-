const express = require('express');
const { ProductsService } = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get('/filter', async (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);

  res.json({ product });
});

router.post('/', async (req, res) => {
  const { body } = req;

  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const product = await service.update(id, body);
    res.json({ message: 'update', data: product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await service.delete(id);
    res.json({ message: 'deleted', deleteId });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
