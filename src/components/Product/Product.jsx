import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const Product = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">E-commerce Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
              alt={product.title} 
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
            <p className="text-gray-600 mt-2 mb-2">${product.price}</p>
            <Link className='bg-black px-2 py-2 text-white' to={`/ProductDet/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
