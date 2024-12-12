const Product = require('../Model/Model');

exports.getProducts = async (req, res) => {
  console.log(req.body);
  
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

exports.addProduct = async (req, res) => {

  const { productName, price, description ,type} = req.body;
  console.log(req.body,"ghjfhjfhg");
  if (!productName || !price || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newProduct = new Product({ productName, price, description,type });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};
