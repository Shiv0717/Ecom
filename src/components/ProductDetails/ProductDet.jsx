import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDet = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold  mb-6">{product.title}</h1>
      <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' alt={product.title} className="w-full h-[400px] object-cover rounded-md mb-4" />
      <p className='text-xl'>{product.description}</p>
      <p className="text-gray-600 mt-2 text-md">Price: ${product.price}</p>
      <p className="text-gray-600 text-md">Rating: {product.rating}</p>
      <button className='bg-black text-white px-4 py-2 mt-4'>Add to cart </button>
    </div>
  );
};

export default ProductDet;
