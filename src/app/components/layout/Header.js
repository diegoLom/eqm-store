// components/layout/Header.jsx
import Link from 'next/link';
import ShoppingCart from '../cart/ShoppingCart';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-xl font-bold">Your Store</a>
          </Link>
          <div className="flex space-x-8">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <ShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
}