import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <>
        <div className='z-10 bg-transparent fixed w-full mx-auto max-w-[1400px] align-center px-10 flex h-20 justify-between p-4 '>
            <div className='flex flex-row gap-1 bg-transparent items-center justify-between'>
                <img src={logo} className='bg-transparent w-10 h-10 h-[15px]'/>
                <p className='bg-transparent font-bold'>Avalerian</p>
            </div>
            <div className='bg-transparent'>
                <ul className='hidden bg-transparent md:flex flex-row w-full gap-8 justify-between'>
                    <li className='bg-transparent'>About</li>
                    <li className='bg-transparent'>Why Avalerian?</li>
                    <li className='bg-transparent'>Our Process</li>
                    <li className='bg-transparent'>Investors</li>
                    <li className='bg-transparent'>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar