import Header from '../components/Header'
import FindUsComponent from '../components/FindUsComponent'
import Footer from '../components/Footer'

const Findus = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <Header />
        <FindUsComponent />
      </div>
      <Footer />
    </div>
  )
}

export default Findus
