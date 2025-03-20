import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import SubSwiper from "./SubSwiper";
import { data } from "../assets/data/services";
import { Autoplay } from "swiper/modules";

const Service = () => {
  return (
    <div className="flex flex-col lg:flex-row px-20 py-16 gap-4 ">
      <div className="w-full lg:w-[20%] flex flex-col gap-6">
        <p className="text-6xl font-bold"
        style={{
          
            fontFamily: "'Poppins', Helvetica",
            color: "transparent",
            textShadow: "0px 5px 5px #6c5fd4",
            WebkitTextStroke: "3px #6c5fd4",
            opacity: 0.5,
            fontSize: "3rem",
            lineHeight: "58px",
          
        }}
        >Explore our Service</p>
        <p>
          Explore our service and discover solutions designed to meet your
          unique needs.With a focus on quality and innovation,we turn your
          vision into reality
        </p>
        <button className="bg-[#6C5FD4] text-white rounded-3xl px-5.5  py-4 w-fit h-fit">
          Book an Appointment
        </button>
      </div>
      <div className="w-full lg:w-[80%] border-2 border-gray-200 rounded-md relative">
        
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} // Connect buttons
        >
          {data.map((d, i) => (
            <SwiperSlide className="p-4 !flex flex-col gap-9">
              <p className="text-3xl text-[#6c5fd4] font-semibold">{d.title}</p>
              <p>
                Keep your lawn in top shape without lifting a finger and boost
                the appearance of your property
              </p>
              <SubSwiper cardsData={d.items} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-[-2.5rem] right-0 flex gap-2">
          <button className="prev-btn">
            <FaArrowLeftLong className="w-6 h-6" />
          </button>
          <button className="next-btn">
            <FaArrowRightLong className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Service;
