import insight from "../assets/images/insight.png";
import blog from "../assets/images/blog.png";
import news from "../assets/images/news.png";
import { TiMessage } from "react-icons/ti";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const articles = [
  {
    caption: "Insight",
    image: insight,
    title: "Future of IT Solutions",
    views: 400,
    comments: 3,
    monthsAgo: 1,
    desc: "Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From Al integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success.",
  },
  {
    caption: "Blog",
    image: blog,
    title: "Vital for Business Growth",
    views: 6500,
    comments: 18,
    monthsAgo: 2,
    desc: "Off-the-shelf software may address basic needs, but custom IT solutions offer tailored benefits that align perfectly with your business goals.Learn how personalized development ensures scalability, enhances productivity, and provides a competitive edge in a rapidly",
  },
  {
    caption: "News",
    image: news,
    title: "Smart UI/UX Design",
    views: 1000,
    comments: 9,
    monthsAgo: 5,
    desc: "User experience is at the heart of any successful application or platform. Smart UI/UX design not only boosts user engagement but also increases conversion rates.",
  },
];

const Articles = () => {
  return (
    <div className="p-16  flex flex-col gap-10">
      <p className="text-3xl font-semibold text-center"
      style={{
        fontFamily:'sans-serif',
        fontWeight:'600',
        fontSize:'36px',
        lineHeight:'44px',
        letterSpacing:'0,5%',
        textAlign:'center',
        verticalAlign:'middle'
      }}
      >
        Our <span className="gradient-text">Blog</span> and  <span className="gradient-text">Articles</span>
      </p>
      <p className="text-center">
        Take a look at our company's Blog Series or read some professional
        gardening insights and news.
      </p>
      <div className="w-full px-16">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {articles.map((article, i) => (
            <SwiperSlide
              key={i}
              className="flex flex-col gap-2 items-start w-[22rem]"
            >
              <img
                src={article.image}
                className="w-full  h-[13rem] object-cover rounded-xl"
                alt=""
              />
              <p>{article.caption}</p>
              <p className="text-2xl">{article.title}</p>
              <div className="flex gap-2 items-center">
                <TiMessage className="text-2xl" />
                <p>{article.comments}</p>
                <MdOutlineRemoveRedEye className="text-2xl" />
                <p>{article.views}</p>
                <FaRegCalendarAlt />
                <p className="">{article.monthsAgo}</p>
              </div>
              <p className="">{article.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Articles;
