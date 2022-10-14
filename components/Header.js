
import HomeIcon from '@mui/icons-material/Home';

import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeaderIcon from './HeaderIcon';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {FaCommentDots} from 'react-icons/fa'
import {AiFillBell } from 'react-icons/ai'
import { Avatar } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
function Header() {
  const { data: session } = useSession()
  return (
    <div className='flex items-center sticky top-0 pt-2 md:px-5 shadow-md bg-white z-50'>
      <div className="header-left flex items-center">
  <img className='h-11 w-11' 
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ta8ChvP8o8vB6Vj80YbiCczH8neVOet5LFSR0zNKgWwldD2aVPRI3pY0C4WqV6akujc&usqp=CAU'
  alt=''/>
  <div className='flex items-center ml-2 bg-gray-100 p-2  rounded-full'>
    <SearchOutlinedIcon className='h-6 text-gray-600'/>
    <input type='text'
className='hidden md:inline-flex bg-transparent outline-none ml-1 flex-shrink placeholder:text-gray-500'
    placeholder='Search Facebook'
    />
  </div>
      </div>
      <div className="header-center flex justify-center flex-grow">
        <div  className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagOutlinedIcon} /> 
         <HeaderIcon Icon={OndemandVideoOutlinedIcon} /> 
          <HeaderIcon Icon={ShoppingCartOutlinedIcon} />
          <HeaderIcon  Icon={UserGroupIcon} />
        </div>
</div> 
 <div className="header-right space-x-2 pr-3 whitespace-nowrap flex items-center">
<GridViewOutlinedIcon className='icon hidden p-2 h-10 w-10
 xl:inline-flex bg-gray-200 rounded-full
    text-gray-500 cursor-pointer
     hover:bg-gray-300'/>
<FaCommentDots className='icon hidden p-2 h-10 w-10
 xl:inline-flex bg-gray-200 rounded-full
    text-gray-500 cursor-pointer
     hover:bg-gray-300'/>
     <AiFillBell className='icon hidden p-2 h-10 w-10
 xl:inline-flex bg-gray-200 rounded-full
    text-gray-500 cursor-pointer
     hover:bg-gray-300'/>
     <img
     onClick={signOut}
     className='h-9 w-9 rounded-full hidden xl:inline-flex cursor-pointer' 
     src={session.user.image}
     />
</div>
    </div>
  )
}

export default Header