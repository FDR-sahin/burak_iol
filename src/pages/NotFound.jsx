import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="text-5xl font-display font-bold text-mustard-400">404</h1>
      <p className="text-charcoal-600 mt-3">Ei page ta khuje pawa jay ni.</p>
      <Link to="/" className="btn-primary inline-block mt-6">
        Home-e fire jan
      </Link>
    </div>
  );
}

export default NotFound;
