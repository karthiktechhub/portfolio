'use client'

import { randMediumline, randline, randlongline } from '@/utils/func'
import Image from 'next/image'
import { useState } from 'react'

type Underlineprops = {
    long?: Boolean,
    mid?:Boolean
}

const Underline = ({long, mid} : Underlineprops ) => {
    const randl1 = randline();
    const randl2 = randline();
    const randlll = randlongline();
    const randml1 = randMediumline();

    const [line,setLine] = useState(
        typeof randl1 === 'string' ?
            randl1 : 
            typeof randl2 === 'string' ?
            randl2 :
            'l1.svg'
    )

    const [longLine, setLongLine] = useState(
        typeof randlll === 'string' ? randlll : 'll1.svg'
    )
    
    const [mediumLine, setMediumLine] = useState(
        typeof randml1 === 'string' ? randml1 : 'sl1.svg'
    )

    return (
        <div className='relative'>
        {
            mid ? 
            <Image src={`/lines/${mediumLine}`} height={300} width={700} alt=''/>
            :
            (!long ?
            <Image className='absolute w-full -top-1' src={`/lines/${line}`} width={75} height={30} alt=''/>
            :
            <Image className="w-full"
            src={`/lines/${longLine}`}
            width={2000}
            height={100}
            alt=""
            />)
        }
        </div>
        )
}

export default Underline