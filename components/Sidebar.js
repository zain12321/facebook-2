import React from 'react'
import SideRow from './SideRow'
import {useSession} from 'next-auth/react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
 function Sidebar() {
    const { data : session, loading} = useSession();

  return (
    <div className='p-2 mt-5 max-w-[300px] xl:min-w-[300px] '>
   <div className='flex items-center space-x-2 p-2 rounded-xl
    cursor-pointer  hover:bg-gray-200 '>
   <img src={session.user.image} className='h-10 w-10 rounded-full'/>
   <p className='text-[14px] hidden sm:inline-flex  font-medium'>{session.user.name}</p>
   </div>
        <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends" />
          <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title="Saved" />
          <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Communitis (Groups)" />
          <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" title="Marketplace" />
          <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch" />
          <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Memories" /> 
         <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" title="Pages" /> 
         <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/uhteIEYDeQx.png" title="Reels" /> 
         <SideRow
         Image="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" title="Most Recent" />
         <div className='flex items-center space-x-2  hover:bg-gray-200 p-2 rounded-xl px-1 cursor-pointer'>
<p className='text-center h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center'>
<MdOutlineKeyboardArrowDown className='h-6 w-6' />
</p>            <p className='text-[14px] hidden sm:inline-flex font-medium'>See More</p>
         </div>

    </div>
  )
}

export default Sidebar