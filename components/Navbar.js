import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap items-center py-2 px-5 sm:px-10 space-x-4 text-blue-800 '>
      <Link href='/'>Pocetna</Link>
      <Link href='/about'>O nama</Link>
      <Link href='/findus'>Pronadjite nas</Link>
    </div>
  )
}

export default Navbar
