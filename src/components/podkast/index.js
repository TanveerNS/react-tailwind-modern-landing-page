import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

const PodKast = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="section-title flex md:mx-32 my-4">
          <h3 className="sepator2">Featured Posts</h3>
        </div>
        <div className="w-full flex flex-row md:px-32">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        loop={true}
        autoplay={{ delay: 1200 }}
        loopFillGroupWithBlank={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-row items-center">
                <img className="w-32 h-32 " src="https://images.unsplash.com/photo-1563330232-57114bb0823c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxzdHVkaW98ZW58MHx8fHwxNjMyNjE4OTA4&ixlib=rb-1.2.1&q=80&w=2000" />
                <h5 className="px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="flex flex-row items-center">
                <img className="w-32 h-32 " src="https://images.unsplash.com/photo-1563330232-57114bb0823c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxzdHVkaW98ZW58MHx8fHwxNjMyNjE4OTA4&ixlib=rb-1.2.1&q=80&w=2000" />
                <h5 className="px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-row items-center">
                <img className="w-32 h-32 " src="https://images.unsplash.com/photo-1563330232-57114bb0823c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxzdHVkaW98ZW58MHx8fHwxNjMyNjE4OTA4&ixlib=rb-1.2.1&q=80&w=2000" />
                <h5 className="px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="flex flex-row items-center">
                <img className="w-32 h-32 " src="https://images.unsplash.com/photo-1563330232-57114bb0823c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxzdHVkaW98ZW58MHx8fHwxNjMyNjE4OTA4&ixlib=rb-1.2.1&q=80&w=2000" />
                <h5 className="px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default PodKast;
