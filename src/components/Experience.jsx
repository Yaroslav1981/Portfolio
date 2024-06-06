import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import { experiences } from "../constans";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({experience,index})=>{
  return(
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div>
        <img src={experience.icon} alt={experience.company_name} />
      </div>
    }
    >
      <h3 className="text-[24px] font-bold">{experience.title}</h3>
      <p className="text-[16px] font-bold">{experience.company_name}</p>
      <p className={`${styles.sectionSubText}`}>{experience.points[index]}</p>
    </VerticalTimelineElement>
  )
}



const Experience = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}>
         <p className={styles.sectionSubText}>What I have done so far</p>
         <h2 className={styles.sectionHeadText}>Work Experience</h2>
         <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {experiences.map((experience,index) =>{
                return <ExperienceCard key={index} experience={experience} index={index}/>
              })}
            </VerticalTimeline>
         </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience,'work')