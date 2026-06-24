import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/slices/productsSlice";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const categories = [
  { value: "all", label: "Shob" },
  { value: "batha-komano", label: "Batha Komano" },
  { value: "chul", label: "Chul-er Jotno" },
  { value: "combo", label: "Combo Pack" },
];

function Products() {
  const products = useSelector(selectAllProducts);
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="container-custom py-12">
      <motion.div
  className="text-center mb-10"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-800">
    Amader Product
  </h1>

  <p className="text-charcoal-400 mt-2">
    Khati sorshe-r tel theke toiri shob product ekhane dekhte parben
  </p>
</motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat.value
                ? "bg-mustard-400 text-white border-mustard-400"
                : "bg-white text-charcoal-600 border-charcoal-100 hover:border-mustard-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-charcoal-400 py-16">
          Eai category-te kono product nei.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
