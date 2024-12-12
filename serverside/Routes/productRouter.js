const express = require('express');

const { getProducts, addProduct } = require('../Controller/Controller');

const router = express.Router();

router.get('/', getProducts);

router.post('/add', addProduct);

module.exports = router;
