import { Logo } from './Icons/Logo'
import { IconFacebook } from './Icons/IconFacebook'
import { IconTwitter } from './Icons/IconTwitter'
import { IconPinterest } from './Icons/IconPinterest'
import { IconInstagram } from './Icons/IconInstagram'

export function Footer () {
  return (
    <footer className='bg-VeryDarkViolet flex items-start pt-12 pb-14 px-32 justify-between'>
      <div>
        <Logo changeColor='#fff' />
      </div>
      <div className='font-poppins flex gap-6'>
        <div>
          <h3 className='font-bold text-white'>Features</h3>
          <ul className='font-medium text-GrayishViolet mt-5 flex flex-col gap-3'>
            <li className='hover:text-Cyan'>Link Shortening</li>
            <li className='hover:text-Cyan'>Branded Links</li>
            <li className='hover:text-Cyan'>Analytics</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-white'>Resources</h3>
          <ul className='font-medium text-GrayishViolet mt-5 flex flex-col gap-3'>
            <li className='hover:text-Cyan'>Blog</li>
            <li className='hover:text-Cyan'>Developers</li>
            <li className='hover:text-Cyan'>Support</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-white'>Company</h3>
          <ul className='font-medium text-GrayishViolet mt-5 flex flex-col gap-3'>
            <li className='hover:text-Cyan'>About</li>
            <li className='hover:text-Cyan'>Our Team</li>
            <li className='hover:text-Cyan'>Careers</li>
            <li className='hover:text-Cyan'>Contact</li>
          </ul>
        </div>
      </div>
      <div className='flex gap-6'>
        <IconFacebook />
        <IconTwitter />
        <IconPinterest />
        <IconInstagram />
      </div>
    </footer>
  )
}
