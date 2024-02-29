import Contact from './components/Contact.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import NextEvent from './components/NextEvent.tsx'
import Partnes from './components/Partnes.tsx'
import Project from './components/Project.tsx'
import Structure from './components/Structure.tsx'
import Testimonials from './components/Testimonials.tsx'

function App() {
  return (
    <>
      <Header />
      <main className="h-max">
        <Hero />
        <NextEvent />
        <Project />
        {/* <Structure />
        <Testimonials /> */}
        <Partnes />
        <Contact />
      </main>
    </>
  )
}

export default App
