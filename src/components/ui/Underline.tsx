'use client'

import { randline, randlongline } from '@/utils/func'
import Image from 'next/image'
import { useState } from 'react'

type Underlineprops = {
    long?: Boolean
}

const Underline = ({long} : Underlineprops ) => {
    const rand1 = randline();
    const rand2 = randline();
    const randll = randlongline()

    const [longLine, setLongLine] = useState(
        typeof randll === 'string' ? 
        randll :
        'll1.svg')

    const [line,setLine] = useState(
        typeof rand1 === 'string' ?
            rand1 : 
            typeof rand2 === 'string' ?
            rand2 :
            'l1.svg')
    
    return (
        <div className='relative'>
        {
            !long ?
            <Image className='absolute w-full -top-1' src={`/svgs/${line}`} width={75} height={30} alt=''/>
            :
            <Image className="w-full"
            src={`/svgs/${longLine}`}
            width={2000}
            height={100}
            alt=""
            />
        }
        </div>
        )
}

export default Underline

