import Image1 from "../assets/images/image-1.png";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";
import Image4 from "../assets/images/image-4.jpg";

const Hero = () => {
  return (
    <div
      className="flex flex-col px-20"
      style={{
        background:
          "linear-gradient(to bottom right,white 50%,#599ce3 70%, #bd2ce8 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-10 ">
          <p className="text-5xl font-bold ">
            <span className="text-[#6e75e3]">Let's innov</span>
            <span className="text-[#c72ce8]">ation</span> meets your excellence
          </p>
          <p className="text-4xl font-semibold">
            Excellence refined, innovation ignited, the future starts here
          </p>
          <button className="bg-[#6C5FD4] text-white rounded-3xl px-5.5  py-4 w-fit h-fit">
            Book an Appointment
          </button>
        </div>
        <div className="flex flex-col h-[32rem] w-[32rem] gap-5">
          <div className="slide-container ">
            <img
              src={Image1}
              className="slide w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] "
              alt=""
            />
            <img
              src={Image2}
              className="slide w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]"
              alt=""
            />
            <img
              src={Image3}
              className="slide w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]"
              alt=""
            />
            <img
              src={Image4}
              className="slide w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex text-white gap-10 ml-auto">
        <div className="border-r-2 border-white px-6">
          <p className="text-xl md:text-6xl font-bold">24/7</p>
          <p>Online Support</p>
        </div>
        <div className="border-r-2 border-white px-6">
          <p className="text-xl md:text-6xl font-bold">100+</p>
          <p>Web Developed & Application</p>
        </div>
        <div>
          <p className="text-xl md:text-6xl font-bold">5+</p>
          <p>Year Experience </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
