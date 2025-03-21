// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Desain bagus, responsif, cepat pula... next time order lagi tentunya.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Saya sangat merekomendasikan jasa desain ini kepada siapa saja yang membutuhkan layanan desain berkualitas. Pengalaman saya sangat positif, dan saya pasti akan menggunakan jasa mereka lagi di masa depan!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Dengan kualitas desain yang ditawarkan, harga yang dikenakan sangat wajar. Saya merasa mendapatkan nilai lebih",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required modules
import { Navigation, Pagination } from "swiper";

//import icon
import { FaQuoteLeft } from "react-icons/fa";
//next images
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar name position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
