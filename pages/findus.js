import FindUsComponent from '../components/FindUsComponent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Findus = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Navbar />
      <div className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <FindUsComponent />
        <FindUsComponent />
        <FindUsComponent />
        <FindUsComponent />
      </div>
      <Footer />
    </div>
  )
}

export default Findus
