import {motion} from 'framer-motion'
import { useState, useRef} from 'react';
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWRapper } from '../HOC'
import { slideIn } from '../utils/motion'



const Contact = () => {
  const formRef= useRef();

   const [form,setForm]=useState({name: '',
                                  email:'',
                                  message:''     
   })
    const [loading,setLoading] =useState(false);

    const handleChange =(e) =>{
         const {name,  value}= e.target;
         setForm({ ...form,[name]: value})
    }
    const handleSubmit =(e) =>{
      e.preventDefault();
      setLoading(true);

     
      emailjs
        .send(
          "service_pcfynog",
          "template_jh33au7",
          {
            from_name: form.name,
            to_name: "Henry",
            from_email: form.email,
            to_email: "henryamos479@gmail.com",
            message: form.message,
          },
          "1WuIT4Qk8MPJGius4"
        )
        .then(() => {
          setLoading(false);
          alert("thank you  i will get back to you as soon as posible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }),
        (error) => {
          console.log(error);
          alert("somthing went wrong");
        };
    }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' id='contact'>
       <motion.div variants={slideIn('left','tween', 0.2, 1)}
                   className='flex-[0.75] bg-black p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>
        <form ref={formRef} 
             onSubmit={handleSubmit}
             className='mt-12 flex flex-col gap-8'>
          <label className=' flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type='text' name='name' 
                   value={form.name}
                   onChange={handleChange}
                   placeholder='Whats your name?'
                   className='bg-neutral-400 py-4 px-6
                   placeholder:text-black text-white
                    rounded-lg outline-none border-none font-medium'
                   />
          </label>
          <label className=' flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' 
                   value={form.email}
                   onChange={handleChange}
                   placeholder='Whats your email?'
                   className='bg-neutral- py-4 px-6
                   placeholder:text-secondary text-white
                    rounded-lg outline-none border-none font-medium'
                   />
          </label>
          <label className=' flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea rows='7'
                   name='message' 
                   value={form.message}
                   onChange={handleChange}
                   placeholder='Whats do you want to say?'
                   className='bg-neutral py-4 px-6
                   placeholder:text-secondary text-white
                    rounded-lg outline-none border-none font-medium'
                   />
          </label>
          <button type='submit' className='border py-3 px-8 outline-none
                     w-fit text-white font-bold shadow-md shadow-white rounded-xl'>
            {loading ? 'sending...': 'send'}
            </button>
        </form>
       </motion.div>
       <motion.div 
                variants={slideIn('right','tween', 0.2, 1)}
                 className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
         <EarthCanvas/>
       </motion.div>
    </div>
  )
}

export default SectionWRapper(Contact,'contact')
