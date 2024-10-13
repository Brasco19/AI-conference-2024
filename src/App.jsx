import './App.css'
import Contact from './components/Contact.jsx'
import Events from './components/Events.jsx'
import Hero from './components/Hero.jsx'
import Infos from './components/Infos.jsx'
import NavBar from './components/NavBar.jsx'
import Programs from './components/Programs.jsx'

function App() {

  return (
    <>
     <div className='font-primary overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Infos />
      <Events />
      <Programs />
      <Contact />
     </div>
    </>
  )
}

export default App
