import Head from 'next/head'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Accounting d.o.o. Sarajevo</title>
				<link rel='icon' href='/icon.ico' />
			</Head>
			<main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
				<Header />
				<Main />
				<Content />
			</main>
			<Footer />
		</div>
	)
}
