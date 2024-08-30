import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slid1 from "../../assets/home/slide1.jpg";
import slid2 from "../../assets/home/slide2.jpg";
import slid3 from "../../assets/home/slide3.jpg";
import slid4 from "../../assets/home/slide4.jpg";
import slid5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";
const Category = () => {
  return (
    <div className="mt-48 mb-48">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-24"
      >
        <SwiperSlide>
          <img src={slid1} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-12 text-white">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-12 text-white">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid3} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-12 text-white">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid4} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-12 text-white">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid5} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-12 text-white">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
