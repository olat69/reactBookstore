import React from "react";
import news1 from "../assets/news-1.png";
import news2 from "../assets/news-2.png";
import news3 from "../assets/news-3.png";
import news4 from "../assets/news-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";

const news = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description:
      "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: news1,
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description:
      "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: news2,
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description:
      "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: news3,
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description:
      "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: news4,
  },
  {
    id: 5,
    title: "Innovative New Smartphone Released by Leading Tech Company",
    description:
      "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
    image: news1,
  },
];

const News = () => {
  return (
    <div className=" py-16 w-full">
      <h1 className="text-3xl font-semibold">News Blog</h1>
      <div className="py-5 "></div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {news.map((news, index) => (
            <SwiperSlide modules={[]} key={index}>
              <div className=" rounded-lg transition-shadow duration-300 ">
                <div className="flex flex-col sm:flex-row sm:items-center size-max  sm:justify-center ">
                  <div className="  size-1/2 sm:h-72 sm:w-max sm:flex-shrink-0 border rounded-md">
                    <Link to={`/new/${news.id}`}>
                      <img
                        src={news.image}
                        alt=""
                        className=" bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                      />
                    </Link>
                  </div>
                  <div className="ml-5">
                    <Link to={`/books/${news.id}`}>
                      <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {news.title}
                      </h3>
                    </Link>
                    <div className="h-[4px] w-12 bg-primary mb-5"></div>
                    <p className="text-gray-600 mb-5 ">
                      {news.description.length > 80
                        ? `${news.description.slice(0, 80)}...`
                        : news.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default News;
