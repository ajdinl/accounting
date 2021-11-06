import Image from 'next/image'
import Typical from 'react-typical'

const Main = () => {
	return (
		<div className='relative'>
			<Image
				src='/images/mainimage.jpg'
				width='1920px'
				height='1080px'
				alt='mainimage'
				className='absolute inset-0 z-0'
			/>
			<div className='absolute inset-0 z-10 flex justify-center items-center text-md sm:text-6xl text-blue-600 font-semibold '>
				<div className='border-2 border-white border-opacity-100 p-2 sm:p-10 bg-white opacity-50'>
					<Typical
						steps={[
							'PODRSKA KOJU ZASLUZUJETE',
							3000,
							'VIDI VISE OD BROJEVA',
							3000,
							'SAMO NEBO JE GRANICA',
							3000,
						]}
						wrapper='p'
						loop={Infinity}
					/>
				</div>
			</div>
		</div>
	)
}

export default Main
