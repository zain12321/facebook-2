import React from 'react'

function StoryCard({src, name, profile}) {
  return (
    <div className='relatives h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-44 cursor-pointer 
    
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <img 
        src={profile}
        className='absolute top-3 lg:opacity-100 opacity-0 z-40 rounded-full
         h-[40px] w-[40px] object-cover '
        layout="fixed"
        />
           <img 
        src={src}
        className='lg:rounded-3xl brightness-75
        filter rounded-full object-cover h-14 w-14 md:h-20 md:w-20 lg:h-52 lg:w-36'
        layout="fill"
        />

        <p className='absolute opacity-0 lg:opacity-100 text-center bottom-8 left-1 w-5/6 text-white text-[12px]
        font-bold translate'>{name}</p>
    </div>
  )
}

export default StoryCard