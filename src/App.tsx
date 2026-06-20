import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <About/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
