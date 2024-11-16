import React from 'react'

export default function layout({ children }) {
  return (
    <div className="mt-20 h-full min-h-screen w-full bg-[linear-gradient(to_right,_#88888839_1px,_transparent_1px),_linear-gradient(to_bottom,_#88888839_1px,_transparent_1px)] bg-[length:50%_33%] dark:bg-black dark:bg-[linear-gradient(to_right,_#5e5e5e3c_1px,_transparent_1px),_linear-gradient(to_bottom,_#5e5e5e3c_1px,_transparent_1px)] dark:text-white lg:bg-[length:33%_33%]">
      {children}
    </div>
  )
}
