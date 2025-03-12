//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxDesign,
  RxCode,
  RxRocket,
  RxDrawingPin,
  RxMobile,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

//service data
export const serviceData = [
  {
    title: "Web Design",
    description:
      "Desain web mengacu pada proses perencanaan, perancangan, dan pengembangan aspek visual dan fungsional dari sebuah situs web untuk proyek atau tujuan tertentu. Ini melibatkan pembuatan tata letak, antarmuka pengguna, dan pengalaman pengguna secara keseluruhan untuk memenuhi tujuan proyek, baik untuk situs web bisnis, portofolio, atau informasi. Desain berfokus pada upaya memastikan situs web menarik secara visual, mudah dinavigasi, dan efektif dalam mencapai hasil yang diinginkan bagi penggunanya.",
    icon: <RxDesign />,
  },
  {
    title: "Web Developer",
    description:
      "Web Developer bertanggung jawab untuk merancang dan mengimplementasikan elemen visual situs web atau aplikasi yang berinteraksi langsung dengan pengguna. Mereka menggunakan bahasa pemrograman seperti HTML, CSS, dan JavaScript untuk membuat antarmuka yang responsif dan ramah pengguna. Peran mereka meliputi memastikan situs web menarik secara visual, fungsional, dan berkinerja baik di berbagai perangkat dan browser, sambil berkolaborasi dengan desainer dan pengembang back-end untuk memberikan pengalaman pengguna yang lancar.",
    icon: <RxCode />,
  },
  {
    title: "SEO Optimization",
    description:
      "Search Engine Optimization (SEO) melibatkan pengoptimalan situs web atau konten daring untuk meningkatkan visibilitas dan peringkatnya di halaman hasil mesin pencari (SERP). Tujuannya adalah untuk meningkatkan lalu lintas organik dengan menerapkan strategi seperti penelitian kata kunci, pengoptimalan pada halaman (seperti tag meta dan konten), pembuatan tautan, dan peningkatan kinerja situs. Proyek SEO bertujuan untuk meningkatkan relevansi dan otoritas situs web, sehingga memudahkan pengguna untuk menemukannya melalui mesin pencari.",
    icon: <RxRocket />,
  },
  {
    title: "Graphics Designer",
    description:
      "Desainer grafis bertanggung jawab untuk membuat konsep dan desain visual untuk proyek tertentu, seperti pencitraan merek, materi pemasaran, atau konten digital. Mereka menggunakan perangkat lunak untuk mengembangkan grafis, tata letak, dan ilustrasi yang secara efektif mengomunikasikan pesan atau tema. Desainer berkolaborasi dengan klien atau tim untuk memahami tujuan proyek dan memastikan bahwa desain akhir selaras dengan visi, audiens, dan tujuan proyek.",
    icon: <RxDrawingPin />,
  },
  {
    title: "UI/UX Designer",
    description:
      "Seorang UI/UX designer profesional yang bertanggung jawab untuk merancang antarmuka pengguna (User Interface/UI) dan pengalaman pengguna (User Experience/UX) dalam produk digital, seperti aplikasi, situs web, dan perangkat lunak. Peran ini sangat penting dalam memastikan bahwa produk tidak hanya menarik secara visual tetapi juga mudah digunakan dan memenuhi kebutuhan pengguna.",
    icon: <RxMobile />,
  },
];

const ServiceSlider = () => {
  <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default ServiceSlider;
