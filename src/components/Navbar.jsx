import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/slices/cartSlice";
import Button from "./Button/Button";
import logo from '../assets/logo.png'


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-mustard-400" : "text-charcoal-600 hover:text-mustard-400"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-mustard-50/95 backdrop-blur border-b border-charcoal-100">
      <div className="bg-green-600 py-3 px-2 md:text-[15px] text-[12px]   flex justify-center items-center text-white">আমাদের মোবাইল নাম্বার সমূহ- 👉01343819318  👉01309393364  
   </div>
      <nav className="container-custom flex items-center justify-between h-16">
        <Link to="/" className="md:w-[150px] w-[110px] font-display font-bold text-xl text-charcoal-800">
         <img className="w-full h-full object-contain" src={logo} alt="logo" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}

        </ul>

        <div className="flex items-center md:gap-3 gap-0">
          <Link
            to="/cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-mustard-100 transition-colors"
            aria-label="Cart dekhun"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-charcoal-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13 5.4 5M7 13l-1.5 4.5h11" />
              <circle cx="9" cy="20" r="1.3" />
              <circle cx="17" cy="20" r="1.3" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute md:-top-1 -top-0 md:-right-1 -right-0 bg-herbal-600 text-white text-[10px] md:w-5 w-4 md:h-5 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden w-10 h-10  flex items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu kholun"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-charcoal-800">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
         <Link to='products'>
            <Button/>
         </Link>
         
        </div>
       
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-mustard-50 border-t border-charcoal-100">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-sm font-medium ${
                    isActive ? "text-mustard-400" : "text-charcoal-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      
    </header>



  );
}

export default Navbar;
