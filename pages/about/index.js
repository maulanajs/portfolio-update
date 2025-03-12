import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPhp } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiAngularjs,
  SiPython,
  SiKotlin,
  SiFirebase,
  SiJetpackcompose,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "keahlian",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiTypescript key="typescript" />,
          <SiNextdotjs key="nextjs" />,
          <SiTailwindcss key="tailwindcss" />,
          <SiMongodb key="mongodb" />,
          <SiNodedotjs key="nodejs" />,
          <SiAngularjs key="angularjs" />,
          <FaPhp key="php" />,
          <SiPython key="python" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiKotlin key="kotlin" />,
          <SiFirebase key="firebase" />,
          <SiFlutter key="flutter" />,
          <SiJetpackcompose key="jetpackcompose" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
      {
        title: "Graphics Designer",
        icons: [
          <SiAdobeaftereffects key="aftereffects" />,
          <SiAdobeillustrator key="illustrator" />,
          <SiAdobeindesign key="indesign" />,
          <SiAdobepremierepro key="premierepro" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "sertifikasi",
    info: [
      {
        title: "HTB Certified Penetration Testing Specialist",
        stage: "2024 - 2026",
      },
      {
        title: "Adobe Certified Associate in Graphic Design",
        stage: "2018 - 2021",
      },
    ],
  },
  {
    title: "pengalaman",
    info: [
      {
        title: "Project Designer at PT Graha Esa",
        stage: "2024 - 2025",
      },
      {
        title: "Frontend Developer at Fiverr",
        stage: "2023 - Present",
      },
      {
        title: "Freelance Designer at Fastwork Technologies Indonesia",
        stage: "2020 - Present",
      },
    ],
  },
  {
    title: "pendidikan",
    info: [
      {
        title: "Illustration Degree",
        stage: "2018",
      },
      {
        title: "Higher Secondary/Pre-U/A Level",
        stage: "2017",
      },
    ],
  },
];

// components
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I'm Maulana Jafar Shodiq and{" "}
            <span className="text-accent">Web Developer</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Saya ahli dalam membuat situs web responsif dan ramah pengguna yang
            berfokus pada fungsionalitas dan desain. Dengan keahlian dalam HTML,
            CSS, JavaScript, dan kerangka kerja seperti React dan Next.js, saya
            senang mengubah ide-ide rumit menjadi pengalaman digital yang
            lancar. Sepanjang karier saya, saya telah bekerja dengan perusahaan
            rintisan dan perusahaan mapan, membantu membangun situs web dan
            aplikasi yang tidak hanya menarik secara visual tetapi juga
            dioptimalkan untuk kinerja dan kegunaan. Saya bersemangat untuk
            selalu mengikuti tren dan teknologi pengembangan web terbaru, terus
            berupaya untuk meningkatkan dan memperluas keterampilan saya.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year Of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
