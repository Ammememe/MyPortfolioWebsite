import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationEntry }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#0980d3", // Changed to #6D5593
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={educationEntry.date}
      iconStyle={{ background: educationEntry.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={educationEntry.icon}
            alt={educationEntry.school_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#0980d3] text-[24px] font-bold'>{educationEntry.title}</h3> {/* Changed to #6D5593 */}
        <p
          className='text-[#0980d3] text-[16px] font-semibold' // Changed to #6D5593
          style={{ margin: 0 }}
        >
          {educationEntry.school_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {educationEntry.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-[#0980d3] text-[14px] pl-1 tracking-wider' // Changed to #6D5593
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#005c9d]`}> {/* Changed to #6D5593 */}
          
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#005c9d]`}> {/* Changed to #6D5593 */}
          Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((educationEntry, index) => (
            <EducationCard
              key={`education-${index}`}
              educationEntry={educationEntry}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
