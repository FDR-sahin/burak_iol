# SorsheCare — Sorshe-r Tel Website

React + Tailwind CSS + React Router + Redux Toolkit diye toiri e-commerce website. Mustard oil based pain-relief o hair-care product-er jonno.

## Kibhabe Run Korben

```bash
npm install
npm run dev
```

Browser-e `http://localhost:5173` open korun.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top nav, cart icon o badge
│   ├── Footer.jsx
│   ├── Layout.jsx          # Navbar + Outlet + Footer + WhatsApp button
│   ├── ProductCard.jsx     # Product grid-er card
│   ├── ReviewSlider.jsx    # Swiper diye customer review carousel
│   ├── StarRating.jsx
│   └── WhatsAppButton.jsx  # Floating WhatsApp + Call button
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx        # Category filter shoho product list
│   ├── ProductDetails.jsx  # Single product page, quantity selector
│   ├── Cart.jsx
│   ├── Checkout.jsx        # Order form (COD / bKash)
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── store/
│   ├── store.js            # Redux store configuration
│   └── slices/
│       ├── cartSlice.js    # Add/remove/update cart, localStorage persist
│       └── productsSlice.js
├── data/
│   ├── products.js         # Dummy product data
│   └── reviews.js          # Dummy review data
├── App.jsx                 # Shob route define kora ache ekhane
└── main.jsx                # Redux Provider wrap kora ache
```

## Jegulo Replace Korte Hobe (Production-er age)

1. WhatsApp/Call number: src/components/WhatsAppButton.jsx, src/pages/ProductDetails.jsx, src/pages/Contact.jsx — 8801XXXXXXXXX ke real number diye replace korun.
2. Product data: src/data/products.js — real product, real image URL, real price diye replace korun.
3. Real backend: Ekhon Checkout.jsx te order submit korle shudhu UI-e success dekhabe, kono backend-e jay na. Real order save korar jonno API endpoint banate hobe.
4. Payment gateway: bKash/Nagad real payment integration korte hobe (bKash Merchant API, SSLCommerz, etc.) jodi online payment lagbe.
5. Reviews: src/data/reviews.js te ekhon dummy review ache, asholay customer review collect kore replace korte hobe.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v3 (custom mustard/charcoal/herbal color palette)
- React Router v6 (multi-page routing)
- Redux Toolkit + React-Redux (cart o products state management)
- Swiper (review carousel)

## Color Palette (tailwind.config.js)

- mustard — primary brand color (amber/mustard tones)
- charcoal — text o neutral color
- herbal — green accent (natural/herbal feel-er jonno)
