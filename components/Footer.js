import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const Footer = () => {
	return (
		<footer className='flex space-x-3 flex-wrap items-center justify-center w-full h-24 border-t'>
			<div>Accounting d.o.o.</div>
			<div className='flex flex-row'>
				<PhoneIcon className='h-4 sm:h-5 w-4 sm:w-5 text-blue-800' />
				<div className='mr-2 ml-0.5 text-xs sm:text-base'>+38761348230</div>
				<MailIcon className='h-4 sm:h-5 w-4 sm:w-5 text-blue-800' />
				<div className='text-xs sm:text-base ml-0.5'>
					senaidalojic@gmail.com
				</div>
			</div>
		</footer>
	)
}

export default Footer
