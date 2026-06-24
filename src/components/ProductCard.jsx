import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import StarRating from "./StarRating";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block bg-white rounded-xl2 border border-charcoal-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-square overflow-hidden bg-mustard-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-herbal-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {discount}% chhar
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display font-medium text-charcoal-800 text-base line-clamp-1">
          {product.name}
        </h3>
        <p className="text-charcoal-400 text-sm mt-1 line-clamp-2">
          {product.shortDesc}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-display font-semibold text-mustard-500">
              ৳{product.price}
            </span>
            {product.oldPrice > product.price && (
              <span className="text-sm text-charcoal-400 line-through">
                ৳{product.oldPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-2 rounded-full transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
