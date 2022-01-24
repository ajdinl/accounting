import AboutComponent from '../components/AboutComponent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Navbar />
      <div className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <AboutComponent />
        <AboutComponent />
        <AboutComponent />
        <AboutComponent />
      </div>
      <Footer />
    </div>
  )
}

export default About
