import AboutComponent from '../components/AboutComponent'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <Header />
        <AboutComponent />
      </div>
      <Footer />
    </div>
  )
}

export default About
