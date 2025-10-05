// components/cart/AddToCart.jsx
import { useCart } from '../../context/CartContext';

export default function AddToCart({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      item: { ...product, quantity: 1 }
    });
  };

  return (
    <button 
      onClick={addToCart}
      className="bg-blue-600 text-white px-6 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}