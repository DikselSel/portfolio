import React from 'react'
import Image from 'next/image'

const ArrowHeader = (props) => {
  return (
    <div className='flex flex-row items-center justify-start gap-5'>
        <Image src="/arrow.png" width="500" height="500" className='w-[30px] h-[30px]'/>
        <h2>{props.title}</h2>
    </div>
  )
}

export default ArrowHeader