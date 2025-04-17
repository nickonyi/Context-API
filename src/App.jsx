import { useState } from 'react';
import useProducts from './useproduct';
import Header from './Header';
import ProductDetail from './productDetail';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products, loading, error } = useProducts();

  const addToCart = (product) => {
    setCartItems((prevState) => [...prevState, product]);
  };
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header cartItemsCount={cartItems.length} />
      <ProductDetail addToCart={addToCart} products={products} />
    </>
  );
}
