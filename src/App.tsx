import dynamic from 'next/dynamic'
import { LoadingScreen } from './Layouts/LoadingScreen'
import { Suspense } from 'react'
import './index.css'

const Navbar = dynamic(() => import('./Layouts/Navbar'), { loading: () => <div className="h-20" /> })
const Hero = dynamic(() => import ('./sections/Hero'))
const AboutMe = dynamic(() => import('./sections/AboutMe'))
const Blog = dynamic(() => import('./sections/Blog'))
const ContactForm = dynamic(() => import('./sections/Contact'))
const Projects = dynamic(() => import('./sections/Projects'))
const Skills = dynamic(() => import('./sections/Skills'))

function App() {

  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Blog />
        <ContactForm />
        {/* footer */}
      </Suspense>
    </main>
  )
}

export default App
