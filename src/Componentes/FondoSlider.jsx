import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function FondoSlider () {
    
    return(
        <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false}}
            loop={true}
            className=" w-full h-screen"        
        >
            <SwiperSlide>
                <div className=" w-full h-screen bg-[url('/src/Image/Fondo.webp')] bg-cover bg-center"></div>
            </SwiperSlide>
             <SwiperSlide>
                <div className=" w-full h-screen bg-[url('/src/Image/Fondo2.png')] bg-cover bg-center"></div>
            </SwiperSlide>
             <SwiperSlide>
                <div className=" w-full h-screen bg-[url('/src/Image/Fondo3.png')] bg-cover bg-center"></div>
            </SwiperSlide>
            
        </Swiper>
        </div>
    )
}