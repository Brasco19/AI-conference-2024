import React from 'react'
import footerLogo from '../assets/crcs_logo.svg'
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-2'>
      <div className='container mx-auto flex items-center justify-between gap-8'>
        <div className='space-y-2 mr-2'>
          <div className='flex flex-col space-x-2 items-start'>
            <img src={footerLogo} alt="" className='w-32 h-auto' />
            <p className='text-[5px] mt-[-4px]'>Centre de Recherche et de Culture Scientifique</p>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className='bg-[#447db3] text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-[#447db3]'>
              <FaFacebookF className='text-xl'/>
            </a>
            <a href="#" className='bg-[#447db3] text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-[#447db3]'>
              <FaTwitter className='text-xl'/>
            </a>
            <a href="#" className='bg-[#447db3] text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-[#447db3]'>
              <FaLinkedin className='text-xl'/>
            </a>
            <a href="#" className='bg-[#447db3] text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-[#447db3]'>
              <FaTiktok className='text-xl'/>
            </a>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='text-xl font-semibold mb-4 text-heroBg/80'>Liens utiles</h3>
          <ul className='space-y-3'>
            <li><a href="#home" className='hover:text-primary text-[#333]'>Accueil</a></li>
            <li><a href="#infos" className='hover:text-primary text-[#333]'>Information</a></li>
            <li><a href="#contact" className='hover:text-primary text-[#333]'>Contact</a></li>
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-xl font-semibold mb-4 text-heroBg/80'>Contact Infos</h3>
          <ul className='space-y-3'>
            <li className='flex'>
              <FaMapMarkerAlt  className='text-primary'/>
              <p className='text-[#333] text-[12px] pl-2'>Adresse: 12345 Rue ça va chauffer, 75000 Libreville</p>
            </li>
            <li className='flex'>
              <FaPhone className='text-primary'/>
              <p className='text-[#333] text-[12px] pl-2'>Tél: +241 123 456 7890</p>
            </li>
            <li className='flex'>
              <FaEnvelope className='text-primary'/>
              <p className='text-[#333] text-[12px] pl-2'>Email: info@crcs.ga</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer