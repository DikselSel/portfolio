import React from 'react'
import Image from 'next/image'

//Icons
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

//Images
import background from "liquid-2.jpg"


const Hero = () => {
    return(
        <main className='grid grid-cols-2 h-[700px]'>
            <div className='container flex flex-col items-start justify-center'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h1 className="m-0 w-fit h-fit xl:text-ultrabig">Hej jestem</h1>
                        <h1 className="m-0 h-fit xl:text-ultrabig bg-gradient-to-t text-opacity-0 from-myGreen to-myBlue bg-clip-text animate-gradient">Dominik</h1>
                        <p className='text-sm xl:text-md'>UX/UI designer | Programista | Montazysta</p>
                    </div>
                    <a>pobierz moje CV</a>
                    <div className='flex flex-row gap-6 mt-5'>
                        <button>Portfolio</button>
                        <button className='gradient-button text-myWhite'>Kontakt</button>
                    </div>
                    <div className='mt-5 text-myWhite text-md flex flex-row gap-[20px]'>
                        <FiInstagram/>
                        <FaFacebook/>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/liquid-2.jpg')] container flex flex-col items-center justify-center overflow-hidden relative ">
                <img src='/dominik.png' width='1000' height='1000' className='h-[1000px] max-w-[1000px] absolute bottom-[-300px]'/>
            </div>
        </main>
    )
}

export default Hero