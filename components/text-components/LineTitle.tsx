import React from 'react'

const LineTitle = (props) => {
  return (
    <div className='relative flex flex-col justify-center items-start'>
        <p className='text-myWhite font-light text-bignormal'>{props.title}</p>
        <div className='w-[50vw] h-2 bg-gradient-to-r from-myGreen to-myBlue'></div>
    </div>
  )
}

export default LineTitle