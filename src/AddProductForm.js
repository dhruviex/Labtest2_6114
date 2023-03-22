// AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to add new product to the list
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="product-category">Product Category:</label>
        <input
          type="text"
          id="product-category"
          value={productCategory}
          onChange={(event) => setProductCategory(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          value={supplier}
          onChange={(event) => setSupplier(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
