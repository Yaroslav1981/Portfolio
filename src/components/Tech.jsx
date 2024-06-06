import { BallCanvas} from './canvas';
import {SectionWrapper} from "../hoc";
import {technologies} from "../constans";
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import {motion} from "framer-motion"


const Tech = () => {
  return (
      <>
      <motion.div variants={textVariant()} className='text-center mb-20'><h2 className={styles.sectionHeadText}>Techologies</h2></motion.div>
        <div className='flex flex-wrap justify-center gap-10'>
          {technologies.map((tech,index)=>{
            return(
              <div key={tech.name} className='h-[100px] w-[100px]'>
                <BallCanvas icon={tech.icon} alt={tech.name}/>
              </div>
            )
          })}

        </div>
      </>
  )
  
}

export default SectionWrapper(Tech,'technologies');