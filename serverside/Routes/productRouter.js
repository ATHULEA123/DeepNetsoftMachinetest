const express = require('express');

const { getProducts, addProduct } = require('../Controller/Controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Products route is working');
});

router.post('/add', addProduct);

module.exports = router;
