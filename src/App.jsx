import './App.css'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Infos from './components/Infos.jsx'
import NavBar from './components/NavBar.jsx'


function App() {

  return (
    <>
     <div className='font-primary overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Infos />
      <Contact />
      <Footer />
     </div>
    </>
  )
}

export default App
