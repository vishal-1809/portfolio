import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { BallCanvas } from './canvas';

// Import all assets
import {
  c, 
  cplusplus,
  java,
  python,
  javascript,
 
  html,
  css, 
  reactjs,
  nodejs,
  expressjs, 
  ml, 
  flask, 
  threejs, 
  jsp, 

  mongodb,
  mysql,
  mssql,

  stl, 
  tailwind,
  bootstrap,
  scss,
  materialUi,

  git,
  github,
  linux,
  postman
} from "../assets";

const Programming = [
  { name: "C", icon: c },
  { name: "C++", icon: cplusplus },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
];

const Web_Development = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Node JS", icon: nodejs },
  { name: "React JS", icon: reactjs },
  { name: "Express JS", icon: expressjs },
  { name: "Machine Learning", icon: ml },
  { name: "Flask", icon: flask },
  { name: "Three JS", icon: threejs },
  { name: "JSP", icon: jsp },
];

const Database = [
  { name: "Mongo DB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "MsSQL", icon: mssql },
];

const ToolKit = [
  { name: "STL", icon: stl },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Sass", icon: scss },
  { name: "Material UI", icon: materialUi },
];

const Others = [
  { name: "Git", icon: git },
  { name: "Github", icon: github },
  { name: "Linux", icon: linux },
  { name: "Postman", icon: postman },
];

const Tech = () => {
  const [rows, setRows] = useState({
    Programming: [],
    Web_Development: [],
    Database: [],
    ToolKit: [],
    Others: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else if (width < 850) {
      dynamicRows = [
        techArray.slice(0, 4),
        techArray.slice(4, 7),
        techArray.slice(7, 11),
        techArray.slice(11, 14),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        Programming: calculateRows(window.innerWidth, Programming),
        Web_Development: calculateRows(window.innerWidth, Web_Development),
        Database: calculateRows(window.innerWidth, Database),
        ToolKit: calculateRows(window.innerWidth, ToolKit),
        Others: calculateRows(window.innerWidth, Others),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring"
      }
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 }
    }
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon  "
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img src={tech.icon} alt={tech.name}  style={{ userSelect: "none" }} draggable="false"/>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills -mt-10" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("Programming", rows.Programming)}
        {renderCategory("Web_Development", rows.Web_Development)}
        {renderCategory("Database", rows.Database)}
        {renderCategory("ToolKit", rows.ToolKit)}
        {renderCategory("Others", rows.Others)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");


// import React from "react";
// import { styles } from "../styles";
// import { textVariant } from "../utils/motion";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <section className="skills">
//       <div className="container">
//         <div variants={textVariant()}>
//           <p className={`${styles.sectionSubText} text-center`}>
//             Technical Proficiencies
//           </p>
//           <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
//         </div>
//         <div
//           className="category-title top"
//           variants={{
//             hidden: { opacity: 0, y: -20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           style={{
//             fontFamily: "'', cursive",
//             fontSize: "26px",
//             background: "linear-gradient(90deg, #915EFF, #00BFFF)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             textFillColor: "transparent",
//             filter: "drop-shadow(0 0 10px #915EFF)",
//           }}
//         >{`<Language>`}</div>
//         <div className="flex flex-row flex-wrap justify-center gap-5">
//           {technologies.map((technology) => (
//             <div key={technology.name}>
//               <div className="honeycomb-grid">
//                 <div className="w-28 h-28 cursor-pointer hexagon">
//                   <BallCanvas icon={technology.icon} /> 
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div
//           className="category-title bottom"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           style={{
//             fontFamily: "'', cursive",
//             fontSize: "26px",
//             background: "linear-gradient(90deg, #915EFF, #00BFFF)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             textFillColor: "transparent",
//             filter: "drop-shadow(0 0 10px #915EFF)",
//           }}
//         >{`</Language>`}</div>
//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(Tech, "skills");


