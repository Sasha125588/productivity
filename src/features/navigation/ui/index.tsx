
import Image from 'next/image'

import Facebook from '@/features/navigation/ui/facebook.png'
import Logo from '@/features/navigation/ui/logo.png'
import Telegram from '@/features/navigation/ui/telegram.png'
import Twitter from '@/features/navigation/ui/twitter.png'
import M from '@/features/navigation/ui/M.png'
import { Button } from '@/shared/ui/components/Button'



export default function Navigation() {
  return (
      <div className='pt-[18px] pb-[18px] px-28 bg-white border-b-2 border-[#D8E3FE]'>
        <nav className='flex justify-between  items-center'>
          <div className='flex items-center gap-[73px]'>
            <Image className='' src={Logo} alt="Logo"/>
            <ul className='text-[#697CA6] flex gap-8 text-xs font-semibold '>
              <li className='hover:text-[#5E81FE] cursor-pointer duration-300'>Home</li>
              <li className='hover:text-[#5E81FE] cursor-pointer duration-300'>Blog</li>
              <li className='hover:text-[#5E81FE] cursor-pointer duration-300'>Features</li>
              <li className='hover:text-[#5E81FE] cursor-pointer duration-300'>Pricing</li>
              <li className='hover:text-[#5E81FE] cursor-pointer duration-300'>Documentation</li>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-11'>
            <ul className='flex gap-8 items-center justify-center'>
              <li><Image className='cursor-pointer' src={Facebook} alt="Facebook" /></li>
              <li><Image className='cursor-pointer' src={Telegram} alt="Telegram" /></li>
              <li><Image className='cursor-pointer' src={Twitter} alt="Twitter" /></li>
              <li><Image className='cursor-pointer' src={M} alt="M" /></li>
            </ul>
            <Button className='text-[#3A79FF] bg-[#D2E1FF] h-[43px] w-[113px] '>Get Started</Button>
          </div>
        </nav>
      </div>
  )
}

