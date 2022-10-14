

function HeaderIcon({Icon, active}) {
  return (
    <div className={`flex rounded-lg cursor-pointer 
    items-center sm:h-14 active:border-b-2 active:border-b-blue-400
     md:hover:bg-gray-100 
    md:px-10 group ${active && 'border-b-2 border-b-blue-400'}`}>
        <Icon className={`h-5 text-center mx-auto
        text-gray-500 sm:h-7 group-hover:text-blue-500 ${active && 'text-blue-500 '}`}/>
    </div>
  )
}

export default HeaderIcon