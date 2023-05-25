import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
const FoodSlider = () => {
    
    return (
        <div className=" h-[500px] my-10">
            <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=996&t=st=1683075730~exp=1683076330~hmac=969fc31235d0badf44be5d2ffa019262400cac1c68075ee88faea767e7ede74c" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1683075774~exp=1683076374~hmac=3f19bf34e1622b89b75ce3c79fd59cf4070a5fe6d06f28b125d18cdb84c23afb" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1683075774~exp=1683076374~hmac=3f19bf34e1622b89b75ce3c79fd59cf4070a5fe6d06f28b125d18cdb84c23afb" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=996&t=st=1683075820~exp=1683076420~hmac=09e76ddf9ab4bc64656104062af366086067c54ebff34afa578cbfd00eeb3475" alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default FoodSlider;