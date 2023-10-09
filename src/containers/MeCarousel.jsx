import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/carouselAMStyle.css';

import { Autoplay, Pagination } from 'swiper/modules';

export default function MeCarousel(){
    return(
        <div className='flex fex-row items-start justify-start pl-1 w-full h-full text-white text-center'>
            <Swiper
                direction={'horizontal'}
                pagination={{
                    clickable: true,

                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 6800,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]} 
                className="carouselAboutMe">

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center h-full w-full pl-1 sm:pl-4 text-center'>
                        <p>Alumno de séptimo semestre en "Ingeniería en Sistemas Computacionales" en la Escuela Superior de Cómputo, del Instituto Poltécnico Nacional.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-center h-full w-full pl-1 sm:pl-4'>
                        <p>Orientado a titularme con especialización en minería de datos y criptografía, disciplinas enfocadas en la obtención y protección de datos.</p>
                    </div>
                </SwiperSlide>             
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-center h-full w-full pl-1 sm:pl-4'>
                        <p>Una persona con diversas áreas de oportunidad pero con la motivación y disciplina necesarias para lograr superar las adversidades que se me presentan.</p>
                    </div>
                </SwiperSlide>             
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-center h-full w-full pl-1 sm:pl-4'>
                        <p>Entusiasta del desarrollo web, más de 6 meses de experiencia trabajando en el desarrollo de este tipo de aplicaciones, enfocado en la parte frontend.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center text-center h-full w-full pl-1 sm:pl-4'>
                        <p>Una persona con gran ambición y ganas de superación, comprometido con desarrollar una perspectiva multidisciplinaria que me permita estar preparado para contribuir en diversos de contextos y proyectos.</p>
                    </div>
                </SwiperSlide>             
            </Swiper>
        </div> 
    );
}