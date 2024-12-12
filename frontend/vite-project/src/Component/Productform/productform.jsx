import React, { useState } from 'react';
import "./Productform.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    description: '',
    type: 'drink',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); 

    try {
      const response = await fetch('http://localhost:5000/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Product added successfully!');
        setFormData({ name: '', price: '', description: '', type: 'drink' });
      } else {
        const errorResponse = await response.json(); 
        alert(`Failed to add product: ${errorResponse.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Add Product</h2>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="productName"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="drink">Drink</option>
              <option value="food">Food</option>
              <option value="brunch">Brunch</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
