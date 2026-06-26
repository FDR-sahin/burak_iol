// import { useState } from "react";
// import { Link, Navigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { app } from "../firebase";
// import { getDatabase, ref, push, set } from "firebase/database";


// import {
//   selectCartItems,
//   selectCartTotal,
//   clearCart,
// } from "../store/slices/cartSlice";

// const DELIVERY_FEE = 60;
// const db = getDatabase(app);

// function Checkout() {
//   const dispatch = useDispatch();
//   const items = useSelector(selectCartItems);
//   const subtotal = useSelector(selectCartTotal);
//   const total = subtotal + DELIVERY_FEE;

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     payment: "cod",
//   });
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [errors, setErrors] = useState({});

//   if (items.length === 0 && !orderPlaced) {
//     return <Navigate to="/products" replace />;
//   }

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = "Naam likhun";
//     if (!/^01[0-9]{9}$/.test(form.phone.trim()))
//       newErrors.phone = "Shothik 11 digit-er number din (01XXXXXXXXX)";
//     if (!form.address.trim()) newErrors.address = "Address likhun";
//     return newErrors;
//   };

//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");
    

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//      if (!name || !phone || !address) {
//           alert("Fill the input box");
//           return;
//         }
    
        
    
//         try {
//           await push(ref(db, "Orders/details/"), {
//             name: name,
//             phone: phone,
//             address: address,
//             date: new Date().toISOString(),
//           });
    
//           alert("Welcome user apnae massge ta amra peyesi");
    
//           setName("");
//           setPhone("");
//           setAddress("");
//         } catch (error) {
//           console.error("Error adding document: ", error);
//           alert("Data sent hosse na");
//         } 


   

    
//     const newErrors = validate();
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       // Asholay backend API call hobe ekhane order data pathanor jonno
//       setOrderPlaced(true);
//       dispatch(clearCart());
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <div className="container-custom py-20 text-center">
//         <div className="w-16 h-16 rounded-full bg-herbal-50 flex items-center justify-center mx-auto mb-5">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-herbal-600">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//         <h1 className="text-2xl font-display font-bold text-charcoal-800">
//           Order shofol hoyeche!
//         </h1>
//         <p className="text-charcoal-400 mt-2">
//           Apnar order amra peyechi. Tratari amra apnar shathe jogajog korbo.
//         </p>
//         <Link to="/" className="btn-primary inline-block mt-6">
//           Home-e firе jan
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container-custom py-12">
//       <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-8">
//         Checkout
//       </h1>

//       <div className="grid lg:grid-cols-3 gap-10">
//         <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-charcoal-600 mb-1">
//               Apnar naam
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
//               placeholder="Apnar puro naam"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-charcoal-600 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
//               placeholder="01XXXXXXXXX"
//             />
//             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-charcoal-600 mb-1">
//               Full Address
//             </label>
//             <textarea
//               name="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               rows={3}
//               className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
//               placeholder="Bari/Flat no, Road, Elaka, Jela"
//             />
//             {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-charcoal-600 mb-2">
//               Payment Method
//             </label>
//             <div className="space-y-2">
//               <label className="flex items-center gap-3 border border-charcoal-100 rounded-lg px-4 py-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="cod"
//                   checked={form.payment === "cod"}
//                   onChange={handleChange}
//                   className="accent-mustard-400"
//                 />
//                 Cash on Delivery
//               </label>
//               <label className="flex items-center gap-3 border border-charcoal-100 rounded-lg px-4 py-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="bkash"
//                   checked={form.payment === "bkash"}
//                   onChange={handleChange}
//                   className="accent-mustard-400"
//                 />
//                 bKash
//               </label>
//             </div>
//           </div>

//           <button type="submit" className="btn-primary w-full">
//             Order Confirm Korun
//           </button>
//         </form>

//         <div className="bg-white border border-charcoal-100 rounded-xl2 p-6 h-fit">
//           <h2 className="font-display font-semibold text-lg text-charcoal-800 mb-4">
//             Order Summary
//           </h2>
//           <div className="space-y-3 mb-4">
//             {items.map((item) => (
//               <div key={item.id} className="flex justify-between text-sm text-charcoal-600">
//                 <span>{item.name} x{item.quantity}</span>
//                 <span>৳{item.price * item.quantity}</span>
//               </div>
//             ))}
//           </div>
//           <div className="border-t border-charcoal-100 pt-4 space-y-2 text-sm text-charcoal-600">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>৳{subtotal}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Charge</span>
//               <span>৳{DELIVERY_FEE}</span>
//             </div>
//           </div>
//           <div className="border-t border-charcoal-100 mt-3 pt-3 flex justify-between font-display font-semibold text-charcoal-800">
//             <span>Total</span>
//             <span>৳{total}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;



import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom"; // useLocation ইম্পোর্ট নিশ্চিত করুন
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import { getDatabase, ref, push } from "firebase/database";

import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../store/slices/cartSlice";

const DELIVERY_FEE = 60;
const db = getDatabase(app);

function Checkout() {
  const dispatch = useDispatch();
  const location = useLocation(); // রাউটার স্টেট পাওয়ার জন্য

  // ১. Redux কার্টের আইটেম এবং টোটাল
  const cartItems = useSelector(selectCartItems);
  const cartSubtotal = useSelector(selectCartTotal);

  // ২. "Buy Now" থেকে আসা প্রোডাক্ট চেক করা
  const buyNowItem = location.state?.product;
  const buyNowQuantity = location.state?.quantity || 1;

  // ৩. যদি "Buy Now" থেকে আসে তবে সেটা দেখাবে, নাহলে Redux কার্টের আইটেম দেখাবে
  const items = buyNowItem 
    ? [{ ...buyNowItem, quantity: buyNowQuantity }] 
    : cartItems;

  const subtotal = buyNowItem 
    ? buyNowItem.price * buyNowQuantity 
    : cartSubtotal;

  const total = subtotal + DELIVERY_FEE;

  // আপনার বাকি স্টেটগুলো ঠিক থাকবে
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const [form, setForm] = useState({
    payment: "cod",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // কার্ট এবং Buy Now উভয় ক্ষেত্রেই ভ্যালিডেশন চেকিং
  if (items.length === 0 && !orderPlaced) {
    return <Navigate to="/products" replace />;
  }

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Naam likhun";
    if (!/^01[0-9]{9}$/.test(phone.trim()))
      newErrors.phone = "Shothik 11 digit-er number din (01XXXXXXXXX)";
    if (!address.trim()) newErrors.address = "Address likhun";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // এরর থাকলে সাবমিট হবে না
    }

    try {
      // Firebase-এ অর্ডার ডাটা পাঠানো (প্রোডাক্টের ডিটেইলস সহ)
      await push(ref(db, "Orders/details/"), {
        name: name,
        phone: phone,
        address: address,
        paymentMethod: form.payment,
        items: items.map(item => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
        totalAmount: total,
        date: new Date().toISOString(),
      });

      alert("Welcome user, apnar message/order amra peyechi");
      
      setOrderPlaced(true);
      dispatch(clearCart()); // কার্ট ক্লিয়ার করা
      
      setName("");
      setPhone("");
      setAddress("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Data sent hocche na");
    }
  };

  if (orderPlaced) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-herbal-50 flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-herbal-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-display font-bold text-charcoal-800">
          Order shofol hoyeche!
        </h1>
        <p className="text-charcoal-400 mt-2">
          Apnar order amra peyechi. Tratari amra apnar shathe jogajog korbo.
        </p>
        <Link to="/" className="btn-primary inline-block mt-6">
          Home-e firе jan
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-8">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Apnar Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
              placeholder="Apnar puro name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
              placeholder="01XXXXXXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Full Address
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
              placeholder="Bari/Flat no, Road, Elaka, Jela"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Payment Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 border border-charcoal-100 rounded-lg px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                  className="accent-mustard-400"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-3 border border-charcoal-100 rounded-lg px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bkash"
                  checked={form.payment === "bkash"}
                  onChange={handleChange}
                  className="accent-mustard-400"
                />
                bKash
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Order Confirm Korun
          </button>
        </form>

        <div className="bg-white border border-charcoal-100 rounded-xl2 p-6 h-fit">
          <h2 className="font-display font-semibold text-lg text-charcoal-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-charcoal-600">
                <span>{item.name} x{item.quantity}</span>
                <span>৳{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-charcoal-100 pt-4 space-y-2 text-sm text-charcoal-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>৳{DELIVERY_FEE}</span>
            </div>
          </div>
          <div className="border-t border-charcoal-100 mt-3 pt-3 flex justify-between font-display font-semibold text-charcoal-800">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;