// pages/products/[id].js
import { getProduct, getProducts } from '../../lib/products';
import AddToCart from '../../components/AddToCart';


import { getProduct, getProducts } from '../../lib/products';

export default function ProductDetail({ product }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-900">${product.price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map(product => ({
    params: { id: product.id }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);
  return { props: { product } };
}