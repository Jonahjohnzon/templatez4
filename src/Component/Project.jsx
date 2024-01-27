import React from 'react'
import { BsDot } from "react-icons/bs";


const Project = () => {
  return (
    <div className=' py-10 sm:py-40 pb-40 sm:pb-60 flex justify-center text-midnight'>
        <div className=' flex flex-col sm:flex-row justify-between w-[90%] xl:w-[70%] 2xl:w-[55%]'>
            <section className=' w-full'>
                <h1 className=' text-4xl sm:text-7xl font-bold mb-5'>Project Status</h1>
                <p className=' text-lg sm:text-xl mb-5'>As of January 31, 2022, the project is:</p>
                <ul>
                    <li className='text-lg sm:text-xl mb-3 flex justify-between h-full  w-full '><BsDot  className=' text-5xl h-fit  w-[6%]'/><p className=' w-[93%]'><span className=' font-bold'>On Schedule:</span> No (Due to the delay in receiving client feedback, the project timeline has been adjusted accordingly.)</p></li>
                    <li className=' text-lg sm:text-xl flex justify-between h-full   w-full'><BsDot  className=' text-5xl h-fit  w-[6%] '/><p className=' w-[93%]'><span className=' font-bold'>Within Budget:</span> Yes</p></li>
                </ul>
            </section>
            <section className=' w-full flex justify-end'>
                <img src='/com2.jpeg' className=' sm:w-[90%]'/>
            </section>
        </div>
    </div>
  )
}

export default Project