import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from "framer-motion";
import {projects} from "../constans";
import {styles} from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant, fadeIn } from '../utils/motion';
import {github} from "../assets";



const ProjectCard = ({name,description,tags,image,source_code_link,index})=>{
  
  return(
    <motion.div variants={fadeIn('up', "spring", 0.5 * index,0.75)} >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary rounded-2xl p-5 sm:w-[350px]  w-full flex flex-col justify-beetwen gap-4'
      >
      <div className='relative w-full h-[230px]'>
        <img 
        src={image} 
        alt={name} 
        className='h-full w-full rounded-2xl  hover:scale-105 transition duration-300 object-cover'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'> {/* Here you can add external links and so on */ }
          <div 
          onClick={()=>{ window.open(source_code_link,'_blank');}}
          className='black-gradient w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition duration-200 flex flex-col  items-center justify-center'
          >
            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain '/>
          </div>
        </div>
      </div>
        <h2 className='text-white font-bold text-[22px]'>{name}</h2>
        <p className={`text-secondary text-[16px]`}>{description}</p>
        <div className='flex gap-3'>
          {tags.map((el,i)=>{
            return (
              <p className={`${el.color}`} key={el.name}>{`#${el.name}`}</p>
            )
          })}
        </div>
      
    </Tilt>
    </motion.div>
    
  )
}





const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=''>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      In my projects section, you will find a diverse array of real-world examples that showcase my proficiency in full-stack development. 
      I have created dynamic e-commerce platforms, interactive dashboards, and immersive 3D visualizations using React and Three.js. 
      These projects demonstrate my ability to integrate front-end and back-end technologies seamlessly, utilizing Express.js for server-side development. 
      Each project highlights my commitment to clean, efficient code and user-friendly design. 
      By working on these real-world applications, I have honed my skills in problem-solving,
      debugging, and optimizing performance, ensuring that the end products are both functional and aesthetically pleasing.
      </motion.p>
      <div className='flex flex-wrap justify-evenly gap-10 mt-20'>
        {projects.map((project,index)=>{
          return(
            <ProjectCard key={project.name} {...project} index={index} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works,'projects');