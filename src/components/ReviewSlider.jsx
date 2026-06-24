import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import reviews from "../data/reviews";
import StarRating from "./StarRating";

function ReviewSlider() {
  return (
    <section className="container-custom py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-charcoal-800">
          Customer-der mot
        </h2>
        <p className="text-charcoal-400 mt-2">
          Amader customer-ra ja bolen, ekhane porun
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white border border-charcoal-100 rounded-xl2 p-6 h-full flex flex-col">
              <StarRating rating={review.rating} />
              <p className="text-charcoal-600 mt-3 flex-1">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-charcoal-100">
                <p className="font-display font-medium text-charcoal-800">
                  {review.name}
                </p>
                <p className="text-sm text-charcoal-400">{review.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ReviewSlider;
