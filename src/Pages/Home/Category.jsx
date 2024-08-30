import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slid1 from '../../assets/home/slide1.jpg'
import slid2 from '../../assets/home/slide2.jpg'
import slid3 from '../../assets/home/slide3.jpg'
import slid4 from '../../assets/home/slide4.jpg'
import slid5 from '../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-48 mb-48"
      >
        <SwiperSlide>
            <img src={slid1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid5} alt="" />
        </SwiperSlide>
      </Swiper>
    );
};

export default Category;