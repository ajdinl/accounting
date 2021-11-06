import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const Header = () => {
	return (
		<div className='flex flex-row space-x-2 pl-10 sm:pl-72'>
			<PhoneIcon className='h-5 w-5 text-blue-800 ' />
			<div className='pr-2 text-xs sm:text-base'>+38761348230</div>
			<MailIcon className='h-4 sm:h-5 w-4 sm:w-5 text-blue-800' />
			<div className='text-xs sm:text-base'>senaidalojic@gmail.com</div>
		</div>
	)
}

export default Header
