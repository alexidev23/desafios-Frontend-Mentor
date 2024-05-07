import { Logo } from './Icons/Logo'

export function Header () {
  return (
    <header className='flex border py-8 justify-between px-32'>
      <div className='flex items-center gap-12'>
        <Logo changeColor='#34313D' />
        <nav>
          <ul className='font-poppins font-bold flex gap-6 text-GrayishViolet'>
            <li className='hover:text-VeryDarkViolet'>Features</li>
            <li className='hover:text-VeryDarkViolet'>Pricing</li>
            <li className='hover:text-VeryDarkViolet'>Resources</li>
          </ul>
        </nav>
      </div>
      <div className='font-poppins font-bold flex items-center gap-4'>
        <button className='text-GrayishViolet px-6 py-2 rounded-full'>Login</button>
        <button className='bg-Cyan text-white px-6 py-2 rounded-full hover:opacity-60'>Sign Up</button>
      </div>
    </header>
  )
}
