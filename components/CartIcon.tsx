// components/CartIcon.tsx
import { useStore } from '@/store';

export default function CartIcon() {
  const { cart } = useStore();
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
      🛒{cart.length}
    </div>
  );
}
