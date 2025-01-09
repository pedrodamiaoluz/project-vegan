
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as S from "../../components/Swiper/style"
import CardSwiper from './cardswiper';
import { ArraySlide } from '../../assets/img/img_categoria/categorias';

export default () => {
  return (
    <S.ContainerSwiper>
    <div class="titulo-swiper">
       <h1>Compre por categoria</h1>
    </div>
    <Swiper className="Swiper"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       autoplay={{
          delay: 3000,
          disableOnInteraction: false,
       }}
       spaceBetween={50}
       slidesPerView={4}
       navigation
       pagination={{ clickable: true }}
       //   scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >

       {ArraySlide.map((item) => {
          return (
             <SwiperSlide>
                <CardSwiper
                   src={item.url}
                   titulo={item.tex}
                />
             </SwiperSlide>
          )
       })}
    </Swiper>
 </S.ContainerSwiper>
  );
}
