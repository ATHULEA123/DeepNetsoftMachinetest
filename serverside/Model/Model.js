const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['food', 'drinks', 'brunch'], // Restrict to specific types
    required: true,
  }
});

module.exports = mongoose.model('Product', productSchema);
