import React from 'react';
import ProductTable from './ProductTable';
import AddProductForm from './AddProductForm';

const App = () => {
  const products = [
    {
      productId: 1,
      productName: 'Product 1',
      productCategory: 'Category 1',
      supplier: 'Supplier 1',
      price: 10.99
    },
    {
      productId: 2,
      productName: 'Product 2',
      productCategory: 'Category 2',
      supplier: 'Supplier 2',
      price: 20.99
    },
    // add more products here...
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductTable products={products} />
      <AddProductForm />
    </div>
  );
};

export default App;


