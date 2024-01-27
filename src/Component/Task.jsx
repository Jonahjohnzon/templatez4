import React from 'react'
import Tab from './Tab'


const Tasks = () => {

  return (
    <div className=' w-full flex flex-col  justify-center text-xl items-center text-blue py-10 sm:py-32 '>
         <div   className=' w-[90%] sm:w-[80%] xl:w-[65%] 3xl:w-[44%] xl:pb-32'>
        <h1 className=' text-4xl sm:text-6xl font-bold  mb-5 text-start'>Completed Tasks</h1>
        <p className=' text-xl pb-10'>During the reporting period, we completed several important tasks:</p>
         <div   className=' mb-5' >
            <Tab   name={"Website Audit"}  type={"a"}/>
            </div>
       <div  className=' mb-5'>
            <Tab   name={"Design prototype"}  type={"b"}/>
            </div>
       <div >
            <Tab  name={"Responsive Design Implementation"}  type={"c"}/>
            </div>
        </div>
    
    
    </div>
  )
}

export default Tasks