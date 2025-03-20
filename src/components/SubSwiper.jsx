import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import Card from "./Card";
const SubSwiper = ({ cardsData, index }) => {
  return (
    <div className="relative">
      <button
        className={`prev-btn${index} absolute -left-6 top-1/2 -translate-y-0.5 text-2xl`}
      >
        <FaCaretLeft />
      </button>
      <Swiper
        loop
        onSwiper={(swiper) =>
          console.log("Next button selector:", swiper.navigation.nextEl)
        }
        modules={[Navigation]}
        navigation={{
          nextEl: `.next-btn${index}`,
          prevEl: `.prev-btn${index}`,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cardsData.map((cardData, i) => (
          <SwiperSlide key={i}>
            <Card
              title={cardData.title}
              bgColor={cardData.bgColor}
              caption={cardData.caption}
              services={cardData.services}
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`next-btn${index} z-20 absolute right-0 top-1/2 -translate-y-1/2 text-2xl`}
      >
        <FaCaretRight />
      </button>
    </div>
  );
};
export default SubSwiper;
