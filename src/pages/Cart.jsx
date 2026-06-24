import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
} from "../store/slices/cartSlice";

const DELIVERY_FEE = 60;

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-display font-semibold text-charcoal-800">
          Apnar cart khali
        </h1>
        <p className="text-charcoal-400 mt-2">
          Product dekhe cart-e add korun
        </p>
        <Link to="/products" className="btn-primary inline-block mt-6">
          Shopping korte jan
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-8">
        Apnar Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white border border-charcoal-100 rounded-xl2 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover bg-mustard-50"
              />
              <div className="flex-1">
                <h3 className="font-display font-medium text-charcoal-800">
                  {item.name}
                </h3>
                <p className="text-mustard-500 font-semibold mt-1">
                  ৳{item.price}
                </p>
              </div>

              <div className="flex items-center border border-charcoal-100 rounded-full">
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                  className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                  aria-label="Quantity komano"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                  className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                  aria-label="Quantity barano"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-charcoal-400 hover:text-red-500 ml-2"
                aria-label="Cart theke baad din"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.8 12a2 2 0 0 1-2 1.8H9.8a2 2 0 0 1-2-1.8L7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white border border-charcoal-100 rounded-xl2 p-6 h-fit">
          <h2 className="font-display font-semibold text-lg text-charcoal-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 text-charcoal-600 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>৳{DELIVERY_FEE}</span>
            </div>
          </div>
          <div className="border-t border-charcoal-100 mt-4 pt-4 flex justify-between font-display font-semibold text-lg text-charcoal-800">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
          <Link to="/checkout" className="btn-primary block text-center mt-6">
            Checkout Korun
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
