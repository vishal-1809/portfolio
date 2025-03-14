import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { resume, profilepic } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-5 flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(128,0,1028,1.0)]">
            <div className="w-full h-full overflow-hidden">
              <img
                src={profilepic}
                alt="Vishal Yadav"
                className="w-full h-full object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
              style={{ boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)", transition: "all ease 0.1s" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(resume, "_blank")}
            >
              <span className="font-semibold">Resume</span>
            </motion.button>

            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
              style={{ boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)", transition: "all ease 0.1s" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://www.linkedin.com/in/vishal1809/", "_blank")}
            >
              <span className="font-semibold">LinkedIn</span>
            </motion.button>

            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
              style={{ boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)", transition: "all ease 0.1s" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://github.com/vishal-1809", "_blank")}
            >
              <span className="font-semibold">GitHub</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.1, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                I&apos;m a Full-Stack Developer with 1.5+ years of experience in building scalable applications. Passionate about crafting seamless user experiences and robust backend systems for optimal performance.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.2, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
              <span>
              I have a background in B.E from <span className="cursor-pointer" onClick={() => window.open("https://www.mctrgit.ac.in/", "_blank")}>Rajiv Gandhi Institute of Technology</span>, which helped me develop a deep understanding of software development and system architecture.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.3, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
              <span>
              From full-stack development to scalable architectures, I&apos;ve built efficient solutions that enhance performance and drive real impact.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.4, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🔧</span>
              <span>
              I actively engage in competitive programming on platforms like Codeforces, CodeChef, LeetCode, GeeksforGeeks, and HackerRank, where I challenge myself to enhance my problem-solving skills. 📈
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.5, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">💡</span>
              <span>
                I&apos;m driven by curiosity and a passion for continuous learning.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
