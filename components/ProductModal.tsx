// components/ProductModal.tsx
import { useStore } from '@/store';

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>✕</button>
        <img src={product.image} className="h-40 object-contain mx-auto" />
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-sm">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
        <button onClick={() => { addToCart(product); onClose(); }} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}
