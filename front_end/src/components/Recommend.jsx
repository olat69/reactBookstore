import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BookCard from "../pages/books/BookCard";

const Recommend = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("books.json");
      const result = await response.json();
      setBooks(result);
    }
    fetchData();
  }, []);

  return (
    <div className=" w-full">
      <h1 className="text-3xl font-semibold">Recommended For You</h1>
      <div className="py-5 "></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {books.slice(8, 16).map((book, index) => (
            <SwiperSlide modules={[]} key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Recommend;
