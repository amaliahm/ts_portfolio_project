import dynamic from 'next/dynamic'
import { LoadingScreen } from './Layouts/LoadingScreen'
import { Suspense } from 'react'
import './index.css'

const Navbar = dynamic(() => import('./Layouts/Navbar'), { loading: () => <div className="h-20" /> })
const Hero = dynamic(() => import ('./sections/Hero'))
const AboutMe = dynamic(() => import('./sections/AboutMe'))
const Blog = dynamic(() => import('./sections/Blog'))
const ContactForm = dynamic(() => import('./sections/Contact'))

function App() {

  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
        <AboutMe />
        {/* skills */}
        {/* projects */}
        <Blog />
        <ContactForm />
        {/* footer */}
      </Suspense>
    </main>
  )
}

export default App
