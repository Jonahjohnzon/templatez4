import React from 'react'

const Issue = () => {
  return (
    <div className=' bg-midnight text-white flex justify-center py-10 sm:py-40'>
        <div className='  w-[90%] xl:w-[70%] 3xl:w-[50%]'>
            <h1 className=' mb-5 text-4xl sm:text-7xl font-bold'>Issues and Risks</h1>
            <p className=' text-lg sm:text-xl mb-10'>During this reporting period, we encountered one major issue:</p>
            <div>
            <div className=' w-full overflow-x-scroll sm:overflow-x-hidden text-start'>
  <section className=' flex justify-between  text-midnight font-bold text-lg sm:text-xl px-1 bg-[#E6DAFD] w-[700px]  sm:w-full'>
    <p className=' text-start w-full py-2 border-r-[1px] border-r-midnight border-opacity-20'>Issue/Risk</p>
    <p className=' text-start w-full py-2 border-r-[1px] border-r-midnight border-opacity-20 pl-1'>Impact</p>
    <p className=' text-start w-full py-2 pl-1'>Mitigation Plan</p>
  </section>
  <section className=' flex bg-white text-lg w-[700px]  sm:w-full  sm:text-xl text-midnight'>
    <p className=' text-start pl-1 w-full py-2 border-r-[1px] border-r-midnight border-opacity-20'>Delay in receiving client feedback</p>
    <p className=' text-start pl-1 w-full py-2 border-r-[1px] border-r-midnight border-opacity-20'>Pushed back the timeline</p>
    <p className=' text-start pl-1 w-full py-2 border-r-[1px] border-r-midnight border-opacity-20'>Adjusted the project schedule and set clear deadlines for feedback in future</p>
  </section>
</div>
            </div>
        </div>
    </div>
  )
}

export default Issue