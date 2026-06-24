import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/slices/productsSlice";
import ProductCard from "../components/ProductCard";
import ReviewSlider from "../components/ReviewSlider";
import hero from "../assets/hero.jpg";
import { default as Marquee } from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import la from "../assets/last.jpg";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";

const features = [
  {
    title: "100% khati upadan",
    desc: "Kono rasayanik mishrito noy, shudhu prakritik sorshe theke toiri.",
    icon: "M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5Z",
  },
  {
    title: "Batha komay",
    desc: "Joint o muscle pain-e niyomito use korle aram pawa jay.",
    icon: "M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z",
  },
  {
    title: "Chul porha bondho kore",
    desc: "Matha-r tok-er jonno upokari, notun chul gojate sahajjo kore.",
    icon: "M12 3c-4 0-7 3-7 7 0 5 3 9 7 11 4-2 7-6 7-11 0-4-3-7-7-7Z",
  },
];

function Home() {
  const products = useSelector(selectAllProducts);
  const featured = products.slice(0, 3);
  const MarqueeComponent = Marquee.default;

  return (
    <div>
      <section className="bg-mustard-50">
        {/* <div className="container-custom py-10 sm:py-5 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-herbal-50 text-herbal-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
              100% Prakritik o Khati
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-charcoal-800 leading-tight">
              Khati sorshe-r tel,
              <span className="text-mustard-400"> batha komano</span> o chul-er
              jotno-r jonno
            </h1>
            <p className="text-charcoal-400 mt-5 text-lg">
              Purono dini protha onujayi toiri amader sorshe-r tel apnar gay-er
              batha o chul porar shomossar prakritik somadhan.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/products" className="btn-primary">
                Shob Product Dekhun
              </Link>
              <Link to="/about" className="btn-outline">
                Aro Janun
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={hero}
              alt="Khati sorshe-r tel bottle"
              className="rounded-xl2 w-full object-cover aspect-[4/3]"
            />
          </div>
          
        </div> */}

        <div className="container-custom py-10 sm:py-5 grid sm:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT SIDE */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-herbal-50 text-herbal-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
              100% Prakritik o Khati
            </span>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-charcoal-800 leading-tight">
              Khati sorshe-r tel,
              <span className="text-mustard-400"> batha komano</span> o chul-er
              jotno-r jonno
            </h1>

            <p className="text-charcoal-400 mt-5 text-lg">
              Purono dini protha onujayi toiri amader sorshe-r tel apnar gay-er
              batha o chul porar shomossar prakritik somadhan.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/products" className="btn-primary">
                Shob Product Dekhun
              </Link>
              <Link to="/about" className="btn-outline">
                Aro Janun
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SIDE */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={hero}
              alt="Khati sorshe-r tel bottle"
              className="rounded-xl2 w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      <h1 className="md:text-4xl text-2xl font-semibold text-center pb-4 text-gray-600">
        Customer <span className="text-green-600">FeedBack</span>
      </h1>
      <MarqueeComponent>
        <div className="w-[300px] h-37">
          <img
            className="w-full h-full object-cover"
            src={f1}
            alt="Hero Image"
          />
        </div>
        <div className="w-[246px] h-55">
          <img
            className="w-full h-full object-cover"
            src={f2}
            alt="Hero Image"
          />
        </div>

        <div className="w-[300px] h-37">
          <img
            className="w-full h-full object-cover"
            src={f3}
            alt="Hero Image"
          />
        </div>
        <div className="w-[246px] h-55">
          <img
            className="w-full h-full object-cover"
            src={f4}
            alt="Hero Image"
          />
        </div>
        <div className="w-[300px] h-37">
          <img
            className="w-full h-full object-cover"
            src={f5}
            alt="Hero Image"
          />
        </div>
        <div className="w-[246px] h-55">
          <img
            className="w-full h-full object-cover"
            src={f6}
            alt="Hero Image"
          />
        </div>
        <div className="w-[300px] h-37">
          <img
            className="w-full h-full object-cover"
            src={f7}
            alt="Hero Image"
          />
        </div>
      </MarqueeComponent>

      <section className="container-custom py-16 grid sm:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="text-center px-4">
            <div className="w-14 h-14 rounded-full bg-mustard-100 flex items-center justify-center mx-auto mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-7 h-7 text-mustard-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
              </svg>
            </div>
            <h3 className="font-display font-medium text-charcoal-800 text-lg">
              {f.title}
            </h3>
            <p className="text-charcoal-400 text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-charcoal-800">
              Jonopriyo Product
            </h2>
            <Link
              to="/products"
              className="text-mustard-400 font-medium hover:underline"
            >
              Shob dekhun →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <h1 className="md:text-4xl text-2xl pt-10 font-semibold text-center pb-8 text-gray-600">
        Customer der <span className="text-green-600">Obiggota</span>
      </h1>

      <div className="container-custom flex md:flex-row flex-col items-center justify-center gap-4">
        <iframe
          className="w-[422.76px] h-[315px] rounded-xl"
          src="https://www.youtube.com/embed/4o46PnleCZs?si=WcWU_JP44QP-VwiB"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[422.76px] h-[315px] rounded-xl"
          src="https://www.youtube.com/embed/fXezPEdgQfg?si=T6u3ZrhmAxfcqzfR"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[422.76px] h-[315px] rounded-xl"
          src="https://www.youtube.com/embed/5OPDbA0GqXY?si=m0ArbqZpDJFJtH8j"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <ReviewSlider />

      <section
        style={{ backgroundImage: `url(${la})` }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="container-custom py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-display font-semibold text-amber-200 text-center sm:text-left">
            Ajkei try korun amader bural oil
          </h2>

          <Link
            to="/products"
            className="bg-black text-mustard-300 font-display font-semibold px-6 py-3 rounded-full hover:bg-charcoal-50 transition-colors"
          >
            Order Korun
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
