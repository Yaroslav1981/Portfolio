import {useState,useRef} from 'react';
import {motion} from "framer-motion";
import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//service_lg3arxr
//template_c3y73wp

//4LqHh0hihs5zQsH8O




const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState('');

  const handleChange = (e) => {
    
    const {name, value} = e.target;

    setForm({...form,[name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   emailjs.send(
    process.env.SERVICE_KEY,
    process.env.TEMPLATE_KEY,
   {
    from_name: form.name,
    to_name: "Jarosław",
    from_email:form.email,
    to_email: "kyaraslav@gmail.com",
    message:form.message,
   },process.env.PUBLIC_KEY)
   .then(()=>{
    setLoading(false);
    alert("Thank you! I will get back to you as soon as possible.")
   
    setForm({
      name:'',
      email:'',
      message:"",
    });
  })
   .catch((e)=>{
    setLoading(false);
    console.log(e);
    alert("Something went wrong.")
   })
   
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>

      <motion.div
        variants={slideIn('left',"tween", 0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col '>
            <span className='text-white font-medium -mb-4'>Your Name</span>
          </label>
          <input 
          type="text"
          name='name' 
          value={form.name}
          onChange={handleChange}
          placeholder='Whats your name?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-indigo-500/35 hover:border-indigo-500/100 transition duration-200 font-medium'
          />

          <label className='flex flex-col '>
            <span className='text-white font-medium -mb-4'>Your Email</span>
          </label>
          <input 
          type="email"
          name='email' 
          value={form.email}
          onChange={handleChange}
          placeholder='Whats your email?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-indigo-500/35 hover:border-indigo-500/100 transition duration-200 font-medium'
         
         
          />

          <label className='flex flex-col '>
            <span className='text-white font-medium -mb-4'>Your Message</span>
          </label>
          <textarea 
          rows='7'
          name='message' 
          value={form.message}
          onChange={handleChange}
          placeholder='What do you want to say?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-indigo-500/35 hover:border-indigo-500/100 transition duration-200 font-medium'
          />
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md hover:scale-110 border border-indigo-500/35 hover:border-indigo-500/100 transition duration-200 shadow-primary rounded-xl'

          >
            {loading?'Sending...':'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div  
      variants={slideIn('right',"tween", 0.2,1)}
      className='xl:flex-1  md:w-[550px] h-[550px] md:self-center'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")