import React from 'react'
import heroImg from '../assets/hero.png'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants.js'

const Hero = () => {
  return (
    <section id='accueil' className='bg-heroBg text-[#FFF8DC] flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <motion.div className='md:w-1/2' variants={fadeIn('down', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Conférence à venir sur l'IA</h1>
            <p className='text-xl font-extralight mb-12 md:pr-8'>Le centre annonce la tenue prochaine d'une conférence sur les applications de  l'intelligence artificielle en Science.
              Pour Celles et Ceux qui souhaitent exposer, un formulaire est disponible afin de fournir les informations de l'exposé.
            </p>
            <button className='bg-primary text-[#FFF8DC] py-3.5 px-8 font-light rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>En Savoir plus</span>
              <IoArrowForwardCircleSharp />
                </a>
            </button>
        </motion.div>

        {/* right side */}
        <motion.div className='md:w-1/2 h-full' variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <img src={heroImg} alt="hero image" className='w-fll object-cover'/>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero