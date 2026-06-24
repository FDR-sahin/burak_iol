function StarRating({ rating, size = "text-sm" }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className={`flex items-center gap-0.5 ${size}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        let symbol = "☆";
        if (i < fullStars) symbol = "★";
        else if (i === fullStars && hasHalf) symbol = "★";
        return (
          <span
            key={i}
            className={i < fullStars || (i === fullStars && hasHalf) ? "text-mustard-400" : "text-charcoal-100"}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
