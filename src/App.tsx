import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import NextEvent from './components/NextEvent.tsx'
import Project from './components/Project.tsx'
import Structure from './components/Structure.tsx'

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="h-max">
        <Hero />
        <NextEvent />
        <Project />
        <Structure />
      </main>
    </>
  )
}

export default App
