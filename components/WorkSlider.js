// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb5.jpg",
        },
        {
          title: "title",
          path: "/thumb6.jpg",
        },
        {
          title: "title",
          path: "/thumb7.jpg",
        },
        {
          title: "title",
          path: "/thumb8.jpg",
        },
        {
          title: "title",
          path: "/thumb9.jpg",
        },
        {
          title: "title",
          path: "/thumb10.jpg",
        },
        {
          title: "title",
          path: "/thumb11.jpg",
        },
        {
          title: "title",
          path: "/thumb12.jpg",
        },
        {
          title: "title",
          path: "/thumb13.jpg",
        },
        {
          title: "title",
          path: "/thumb14.jpg",
        },
        {
          title: "title",
          path: "/thumb15.jpg",
        },
        {
          title: "title",
          path: "/thumb16.jpg",
        },
        {
          title: "title",
          path: "/thumb17.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb5.jpg",
        },
        {
          title: "title",
          path: "/thumb6.jpg",
        },
        {
          title: "title",
          path: "/thumb7.jpg",
        },
        {
          title: "title",
          path: "/thumb8.jpg",
        },
        {
          title: "title",
          path: "/thumb9.jpg",
        },
        {
          title: "title",
          path: "/thumb10.jpg",
        },
        {
          title: "title",
          path: "/thumb11.jpg",
        },
        {
          title: "title",
          path: "/thumb12.jpg",
        },
        {
          title: "title",
          path: "/thumb13.jpg",
        },
        {
          title: "title",
          path: "/thumb14.jpg",
        },
        {
          title: "title",
          path: "/thumb15.jpg",
        },
        {
          title: "title",
          path: "/thumb16.jpg",
        },
        {
          title: "title",
          path: "/thumb17.jpg",
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

//import icon
import { BsArrowRight } from "react-icons/bs";
//next images
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* images */}
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                  />
                  {/* overflow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 1 */}
                      <div className="delay-100">Live</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
