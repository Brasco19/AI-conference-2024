import React, { useState } from 'react'
import { FaWpforms } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants.js'
import '../App.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)

    formData.append('access_key', '91077479-0a88-4ff2-82ee-0b836fff9bdc')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch ("https://api.web3forms.com/submit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    }).then((res)=> res.json())

    if (res.success){
      Swal.fire({
        title: "Merci pour votre message!", 
        text: "Nous vous répondrons dans les plus brefs délais.",
        icon: "success",
        confirmButtonText: "Fermer"
      })
      e.target.reset()
    } else {
      Swal.fire({
        title: "Erreur",
        text: "Une erreur s'est produite lors de l'envoi de votre message.",
        icon: "error",
        confirmButtonText: "Fermer"
      })
    }
  }

  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:4/5 mx-auto grid grod-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
        {/* left side */}
        <motion.div className='space-y-8 text-[#f0f4f9]' variants={fadeIn('down', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
          <h2 className='text-4xl font-bold font-secondary mb-4'>Contactez-nous</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-[#f0f4f9]/90'>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#f0f4f9]/50 hover:bg-[#f0f4f9]/20 p-3'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfytoS7fHWWtFyc3xK1el7h1_H4wHwGEc1ex6Vf-y_b6ZjpKw/viewform?usp=pp_url">
                  <FaWpforms className='text-primary'/>
                </a>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Enregistrement</h3>
                <p className='font-extralight text-[8px] flex items-start'>Accedez au formulaire GoogleForm</p>  
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#f0f4f9]/50 hover:bg-[#f0f4f9]/20 p-3'>
              <a href="infos@crcs.ac.org">
                  <MdEmail className='text-primary'/>
                </a>
              </div>
              <div className='space-y-1'>
                <h3 className='text-[16px] font-medium'>Adresse electronique</h3>
                <p className='font-extralight text-[8px] flex items-start'>infos@crcs.ac.org</p>  
              </div>
            </div>
          </div>
        </motion.div>

        {/* right side */}
        <motion.div className='space-y-8 p-8 bg-[#f0f4f9] shadow-xl rounded-md text-[#333]' variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
          <form onSubmit={onSubmit}>
            <h3 className='text-2xl font-bold mb-4'>Envoyez nous un message</h3>
            <div className='input-box'>
              <label className='text-16px font-light text-[#333]'>Nom et/ou Pseudo</label>
              <input type="text" className='field text-16px font-light text-[#333]' placeholder='Veillez indiquer votre nom' name='name' required/>
            </div>
            <div className='input-box'>
              <label className='text-16px font-light text-[#333]'>Email</label>
              <input type="email" className='field' placeholder='Veillez indiquer votre email' name='email' required/>
            </div>
            <div className='input-box'>
              <label className='text-16px font-light text-[#333]'>Message</label>
              <textarea className='field mess ' name='message' placeholder='Veillez saisir votre message' required/>
            </div>
            <button type='submit' className='btn'>Envoyer</button>
          </form>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
