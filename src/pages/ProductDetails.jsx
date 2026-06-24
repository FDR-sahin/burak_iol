import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, selectProductById } from "../store/slices/productsSlice";
import { addToCart } from "../store/slices/cartSlice";
import StarRating from "../components/StarRating";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, id));
  const allProducts = useSelector(selectAllProducts);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="container-custom py-12">
      <nav className="text-sm text-charcoal-400 mb-6">
        <Link to="/" className="hover:text-mustard-400">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-mustard-400">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal-600">{product.name}</span>
      </nav>

      <div className="grid sm:grid-cols-2 gap-10">
        <div className="bg-mustard-50 rounded-xl2 overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-charcoal-800">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <StarRating rating={product.rating} />
            <span className="text-sm text-charcoal-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-3xl font-display font-bold text-mustard-500">
              ৳{product.price}
            </span>
            {product.oldPrice > product.price && (
              <span className="text-lg text-charcoal-400 line-through">
                ৳{product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-charcoal-600 mt-5 leading-relaxed">
            {product.description}
          </p>

          <ul className="mt-5 space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-charcoal-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-herbal-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <p className="text-sm text-charcoal-400 mt-4">
            Stock-e ache: {product.stock} pcs
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-charcoal-100 rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                aria-label="Quantity komano"
              >
                −
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="w-10 h-10 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                aria-label="Quantity barano"
              >
                +
              </button>
            </div>

            <button onClick={handleAddToCart} className="btn-primary flex-1">
              {added ? "Cart-e jog hoyeche ✓" : "Cart-e dhin"}
            </button>
          </div>

          <a
            href={`https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(
              `Assalamu alaikum, ami ${product.name} order korte chai.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 text-herbal-600 font-medium hover:underline"
          >
            WhatsApp-e order korun
          </a>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-display font-semibold text-charcoal-800 mb-8">
          Aro Product Dekhun
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
