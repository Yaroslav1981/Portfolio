import React, {useEffect,useState} from 'react'
import {Link, NavLink} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constans';
import {logo, menu, close} from "../assets";
import {StarsCanvas} from "../components";
import { slideIn,fadeIn, NavMotion } from '../utils/motion';
import {motion} from "framer-motion"



const NavLinkCard = ({index, title, id, active, click,toggle})=>{

  
  return(
    <motion.li 
      className={`${active === title ? 'text-white' :  "text-secondary"} hover:text-white  font-medium cursor-poiter  text-center font-poppins text-[36px] duration-300`} 
      onClick={()=>click()}
      whileHover={{
        scale:1.2,
        transition: { duration: 0.1 }
      }}
      variants={slideIn((index %2) ?"right":"left", "string",(index+0.3)*0.2, 0.01)}
      initial={false}
      animate={!toggle?"show":"hidden"}
      >
        <a href={`#${id}`}>{title}</a>
    </motion.li>
  )
}









const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState('false');

  const handleClick =(title)=>{
    setActive(title);
    setToggle(!toggle);
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2 '
          onClick={()=>{
          setActive('');
          window.scrollTo(0,0)}}
        >
        <img src={logo} alt="logo" className='w-20 h-20 object-contain'/>    
        <p className='text-white text-[18px] font-bold cursor-pointer hover:scale-110 transition-all duration-500'>Jaroslaw<span className='sm:block hidden'>Krukowski</span></p>  
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
            {navLinks.map((link)=>{
              return <li key={link.id} 
              className={`${active === link.title ? 'text-white' :  "text-secondary"} 
              hover:text-white text-[18px] font-medium cursor-poiter transition-all duration-300`} 
              onClick={()=>setActive(link.title)}><a href={`#${link.id}`}>{link.title}</a></li>
            })}
        </ul>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
            <img 
            className='w-[28px] h-[28px] object-contain cursor-pointer z-10'
            alt="menu"
            src={toggle?menu:close}
            onClick={()=>setToggle(!toggle)}/>
            <motion.div 
              className={` p-6  fixed   min-w[140px] z-5 rounded-xl bg-primary inset-0 `}
              initial={false}
              variants={NavMotion()}
              animate={!toggle?"show":"hidden"}
            >
              <ul className='list-none flex flex-col gap-4 mx-auto justify-evenly h-full'>
                {navLinks.map((link,index)=>{
                  return <NavLinkCard key={link.title} {...link} index={index} active={active} click={handleClick} toggle={toggle}/>
                })}
              </ul>
              
                <StarsCanvas/>
              
            </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar