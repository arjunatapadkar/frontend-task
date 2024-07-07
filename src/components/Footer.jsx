import React from 'react'
import path from '../assets/path.svg'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <>
        <div className='bg-black flex z-[100]  justify-between items-center h-[120px] px-24'>
            <p className='text-[16px]'>©2022 All right reserved</p>
            <img className='w-[53px]' src={logo} />
            <div className='flex gap-4 text-[16px]'>
                <p>Back to the top</p>
                <img  src={path} />
            </div>
        </div>
    </>
  )
}

export default Footer