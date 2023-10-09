import { Swiper, SwiperSlide } from 'swiper/react';
import FotoMia from "../assets/images/FotoPresentacion.jpeg"


// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/carouselStyle.css';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className='flex fex-row items-start justify-start pl-1 w-full h-full'>
            <Swiper
                direction={'horizontal'}
                pagination={{
                    clickable: true,

                }}
                navigation={true}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 40000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, Navigation]} 
                className="carouselPics">

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-left h-full w-full pl-1 sm:pl-4'>
                        <img src={FotoMia} className='h-[300px] w-[300px]'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-left h-full w-full pl-1 sm:pl-4'>
                        <img src={FotoMia} className='h-[300px] w-[300px]'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-left h-full w-full pl-1 sm:pl-4'>
                        <img src={FotoMia} className='h-[300px] w-[300px]'/>
                    </div>
                </SwiperSlide>             
            </Swiper>
        </div>
    );
}