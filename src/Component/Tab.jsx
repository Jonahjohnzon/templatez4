import React, { useState } from 'react'
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";


import {motion} from 'framer-motion'

const Tab = ({name, type}) => {
    const [show, setshow] = useState(false)

  return (
    <div>
    <div className=' w-full bg-midnight text-white rounded-md cursor-pointer transition-all ease-in-out duration-300' onClick={()=>setshow(!show)} >
        <div className=' flex text-2xl lg:text-4xl font-bold      items-center px-3 py-4 justify-between '><p >{name}</p> {show?<span className='font-light w-[4%]'><AiOutlineCaretDown className=' text-lg text-yellow' /></span>:<span className=' font-light w-[7%]  lg:w-[4%]'><AiOutlineCaretRight className=' text-lg text-yellow' />
</span>}</div>
    </div>
    {(type == "a" && show) &&<div className=' bg-white shadow-sm rounded-b-md w-full p-5 border-[1px] border-midnight border-opacity-20'>
   { "We conducted a thorough audit of the existing website to identify areas needing improvement. "}
    </div>}
    {(type == "b" && show) &&<div  className=' bg-white shadow-sm rounded-b-md w-full p-5 border-[1px] border-midnight border-opacity-20'>
    We created a design prototype of the new website, which was approved by the client.
    </div>}
    {(type == "c" && show) &&<div  className=' bg-white shadow-sm rounded-b-md w-full p-5 border-[1px] border-midnight border-opacity-20'>
     <p className=' mb-5'>We implemented the responsive design for the new website, ensuring compatibility across devices.</p>
    </div>}

    </div>
  )
}

export default Tab