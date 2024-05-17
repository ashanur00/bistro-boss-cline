
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import SectionTitel from '../SectionTitel/SectionTitel';
const Banner2 = () => {
    return (
        <div className='mb-16'>
            <div>
                <SectionTitel subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}>                
                </SectionTitel>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt=""  /> 
                    <h2 className='lg:text-4xl  text-center uppercase -mt-24 mb-28 font-cinzel text-[#ffffffee]'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className='lg:text-4xl  text-center uppercase -mt-24 mb-28 font-cinzel text-[#ffffffee]'>pizzas</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className='lg:text-4xl  text-center uppercase -mt-24 mb-28 font-cinzel text-[#ffffffee]'>Soups</h2>
                    </SwiperSlide>
                <SwiperSlide >
                    <img src={img4} alt="" />
                    <h2 className='lg:text-4xl  text-center uppercase -mt-24 mb-28 font-cinzel text-[#ffffffee]'>desserts</h2>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner2;