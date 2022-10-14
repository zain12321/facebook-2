import React from 'react'
import {Image} from 'next/Image'

function SideRow({ Image, title }) {
  return (
    <div className='flex items-center space-x-2  hover:bg-gray-200 p-2 rounded-xl cursor-pointer'>
       
      <img src={Image} alt='image' className='h-7 w-7'/>
      <h1 className='text-[14px] hidden sm:inline-flex font-medium'>{title}</h1>
    </div>
  )
}

export default SideRow;