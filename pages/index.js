import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Accounting d.o.o. Sarajevo</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
        <Navbar />
        <Main />
      </main>
      <Footer />
    </div>
  )
}
