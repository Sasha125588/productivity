import Image from 'next/image'

import Facebook from '@/features/customers/ui/facebook.png'
import AppleWatch from '@/features/customers/ui/apple-watch.png'
import Audi from '@/features/customers/ui/audi.png'
import BitBucket from '@/features/customers/ui/bitbucket.png'
import Atlassian from '@/features/customers/ui/atlassian.png'

export default function Customers() {
    return (
        <div className="h-36 bg-white py-14 px-64 border-b-2 border-[#D8E3FE]">
            <ul className='flex justify-between items-center gap-20'>
                <li><Image className='cursor-pointer' src={Facebook} alt="Facebook" /></li>
                <li><Image className='cursor-pointer' src={AppleWatch} alt="AppleWatch" /></li>
                <li><Image className='cursor-pointer' src={Audi} alt="Audi" /></li>
                <li><Image className='cursor-pointer' src={BitBucket} alt="BitBucket" /></li>
                <li><Image className='cursor-pointer' src={Atlassian} alt="Atlassian" /></li>
            </ul>
        </div>
    )
}

