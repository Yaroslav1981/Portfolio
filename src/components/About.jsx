import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from '../constans';
import {fadeIn, textVariant} from "../utils/motion";
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', "spring", 0.5 * index,0.75 )} className='w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]'> 
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-[20px] text-white font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
  
}



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=''>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am an intermediate full-stack web developer with experience in JavaScript, React, CSS, HTML, and Node.js. 
      I have proficiency with frameworks such as Express.js and Three.js, which I have utilized to build dynamic and responsive web applications. 
      My ability to quickly grasp new technologies and apply them effectively has enabled me to contribute to diverse projects efficiently. 
      As a fast learner, I continually expand my skill set, ensuring my work remains innovative and up-to-date. 
      My strong problem-solving skills, attention to detail, 
      and collaborative approach further enhance my ability to deliver high-quality solutions.
      </motion.p>
      <div className='mt-20 xs:justify-center md:justify-start flex flex-wrap gap-10 '>
          {services.map((card,index)=>{
            return <ServiceCard key={card.title} index={index } {...card} />;
          })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")