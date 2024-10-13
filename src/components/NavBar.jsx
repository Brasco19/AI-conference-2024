import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import  {motion} from 'framer-motion'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('accueil')
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }
    const handleCloseMenu = () => {
        setIsOpen(false)
    }
    const handleScroll = () =>{
        const sections = ['accueil', 'infos', 'contact']
        const scrollPosition = window.scrollY + 100

        sections.forEach(section =>{
            const element = document.getElementById(section)
            if(element){
                const offsetTop = element.offsetTop
                const height = element.offsetHeight
                if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section)
                }
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollTo = (targetId) =>{
        const targetElement = document.getElementById(targetId)
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior:'smooth'
            })
        }
    }

    const navLinks = (
        <ul className='font-light  flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a 
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}
                    onClick={(e) => {
                        e.preventDefault()
                        handleCloseMenu()
                        handleScrollTo('accueil')
                    }}
                    href="#accueil" 
                    className={`text-[#FFF8DC] ${activeSection === 'accueil' ? 'isActive' : ''}`}
                    >
                        Accueil
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}
                    onClick={(e) => {
                        e.preventDefault()
                        handleCloseMenu()
                        handleScrollTo('infos')
                    }}
                    href="#infos" className={`text-[#FFF8DC] ${activeSection === 'infos' ? 'isActive' : ''}`}>
                    Information
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}
                    onClick={(e) => {
                        e.preventDefault()
                        handleCloseMenu()
                        handleScrollTo('contact')
                    }}
                    href="#contact" 
                    className={`text-[#FFF8DC] ${activeSection === 'contact' ? 'isActive' : ''}`}>
                    Contact
                </motion.a>
            </li>
        </ul>
    )

  return (
    <header className='bg-heroBg text-white py-2 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container xm-auto flex justify-between items-center h-full'>
            {/* logo */}
            <div className='text-white text-lg font-semibold'>
                <a href="/" className='container flex flex-col items-start justify-start' onClick={(e)=> {
                    e.preventDefault()
                    handleCloseMenu()
                }}>
                <img src="/logo_crcs_white.svg" alt="crcs logo" className='w-90 h-auto'/>
                <p className='font-secondary font-light text-[6px] mt-[-15.4px] text-[#FFF8DC]'>Centre de Recherche et de Culture Scientifiques</p>
                </a>
            </div>
            {/* navitems */}
            <div className='hidden md:flex flex-grow justify-center'>
                {navLinks}
            </div>
            {/* button */}
            {/* <div className='hidden md:block'> 
                <a href="#contact" className='text-[#03315c] bg-primary hover:bg-primary/90 px-4 py-2 rounded font-light'>Contactez Nous</a>
            </div> */}

            {/** hamburger menu */}
            <div className='block md:hidden'>
                <button onClick={handleToggle} className={`text-[#FFF8DC] focus:outline-none ${isOpen ? 'border border-[#FFF8DC]' : ''}`}>
                    <HiOutlineMenuAlt3 className='size-6'/>
                </button>
            </div>
        </div>

        {/** mobile nav items */}
        {
            isOpen  && (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                        {/* <li className='py-2 list-none'>
                            <a href="#contact" className='text-[#03315c] bg-primary hover:bg-primary/90 px-4 py-2 rounded' 
                                onClick={(e)=> {
                                    e.preventDefault();
                                    handleCloseMenu();
                                }}>
                                Contactez Nous
                            </a>
                        </li> */}
                    </ul>
                </nav>
            )
        }
    </header>
  )
}

export default NavBar