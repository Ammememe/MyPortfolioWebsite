import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#6D5593] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
   <motion.div variants={textVariant()}>
  <p className="text-[#60618b] font-bold">Introduction</p> {/* Changes made here */}
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>



      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 text-[#24152c] text-[20px] max-w-3xl leading-[30px]'
      >
         As a passionate cloud software developer, 
        my expertise lies in Java and Cloud Computing, with a deep focus on AWS technologies. 
        My educational background in the Cloud Developer AWS program has honed my skills in object-oriented programming, 
        systematic software development, and a range of web technologies, including HTML, CSS, and React Js frameworks.
        I am skilled in handling cloud infrastructure, database management, and security protocols, aiming to create scalable and reliable solutions. 
        My approach is defined by a relentless commitment to problem-solving; I thrive on unraveling technical challenges to find effective, 
        user-centric solutions. 
        Eager to collaborate, I am ready to leverage my diverse skill set to bring your visionary ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");