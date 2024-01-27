import React from 'react'
import Tab from './Tab'


const Upcoming = () => {
   
  return (
    <div className=' w-full  flex flex-col justify-center text-xl items-center text-blue py-10 sm:py-32 relative '  style={{backgroundImage:"url('/bg2.gif')"}}>
        <div className=' absolute z-10 w-full h-full bg-midnight opacity-5'></div>
         <div   className=' w-[90%] sm:w-[70%] xl:w-[65%] 3xl:w-[44%] xl:pb-32 relative z-20'>
        <h1 className=' text-5xl sm:text-6xl font-bold  mb-5 text-start'>Upcoming Tasks</h1>
        <p className=' text-xl pb-10'>In the next reporting period, we plan to accomplish the following tasks</p>
         <div   className=' mb-5' >
            <Tab   name={"Navigation Improvement"}  type={"a"}/>
            </div>
       <div  className=' mb-5'>
            <Tab   name={"Speed Optimization"}  type={"b"}/>
            </div>
       <div  >
            <Tab  name={"Testing"}  type={"c"}/>
            </div>
        </div>
    
    
    </div>
  )
}

export default Upcoming