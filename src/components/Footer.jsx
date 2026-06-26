import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Footer() {
  return (
  <footer className="bg-charcoal-800 text-charcoal-100 mt-2">

  <div className="container-custom py-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

    {/* LOGO */}
    <div>
      <Link to="/" className="inline-flex items-center text-green-600">
        Burak <span className="text-amber-400"> oil</span>
      </Link>

      <p className="text-sm text-charcoal-500 mt-4">
        100% khati sorshe-r tel — batha komano o chul pora bondho korar jonno prakritik somadhan.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="font-display font-medium text-white mb-3">
        Quick Links
      </h4>

      <ul className="space-y-2 text-sm text-charcoal-500">
        <li><Link to="/" className="hover:text-mustard-300">Home</Link></li>
        <li><Link to="/products" className="hover:text-mustard-300">Products</Link></li>
        <li><Link to="/about" className="hover:text-mustard-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-mustard-300">Contact</Link></li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="font-display font-medium text-white mb-3">
        Jogajog
      </h4>

      <ul className="space-y-2 text-sm text-charcoal-500">
        <li>Phone: +880 01323392363</li>
        <li>Email: burakshofic@gmail.com</li>
        <li>Bokshigonj, Jamalpur Sadar, Bangladesh, 2140</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-charcoal-600 py-4">
    <p className="text-center text-xs text-charcoal-500">
      © {new Date().getFullYear()} SorsheCare. Shob shotto songrokkhito.
    </p>
  </div>

</footer>
  );
}

export default Footer;
