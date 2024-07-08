import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <>
        <div className='z-50   w-full mx-auto max-w-[1400px] align-center px-10 flex flex-col md:flex-row items-center h-20 justify-between p-4 '>
            <div className='flex flex-row gap-1 bg-transparent items-center justify-between'>
                <img src={logo} className='bg-transparent h-14'/>
                <p className='bg-transparent text-xl  font-bold'>Avalerian</p>
            </div>
            <div className='bg-transparent'>
                <ul className='bg-transparent text-xs gap-3 md:text-xl flex flex-row items-center w-full md:gap-8 md:justify-between justify-around'>
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