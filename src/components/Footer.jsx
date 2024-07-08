import React from 'react'
import path from '../assets/path.svg'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <>
        <div className='bg-black flex z-[100]  justify-between items-center h-[120px] px-2 md:px-24'>
            <p className='text-xs md:text-[16px]'>©2022 All right reserved</p>
            <img className='w-[53px]' src={logo} />
            <div className='flex md:gap-4 text-sm md:text-[16px]'>
                <p>Back to the top</p>
                <img  src={path} />
            </div>
        </div>
    </>
  )
}

export default Footer