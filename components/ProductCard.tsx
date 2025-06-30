// components/ProductCard.tsx
export default function ProductCard({ product, onClick }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow cursor-pointer" onClick={onClick}>
      <img src={product.image} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm line-clamp-2">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
    </div>
  );
}
