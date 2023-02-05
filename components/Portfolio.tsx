import React from 'react'

//My comonents
import ArrowHeader from './text-components/ArrowHeader'
import LineTitle from './text-components/LineTitle'

const Portfolio = () => {
  return (
    <main className='h-[500px] py-[100px]'>
      {/*Header + title*/}
      <div className='flex flex-row justify-between pl-[100px]'>
        {/*Header*/}
        <ArrowHeader title="Portfolio"/>
        {/*Title*/}
        <LineTitle title="Moje najlepsze prace"/>
      </div>
      {/*My arts*/}
      <div></div>
    </main>
  )
}

export default Portfolio