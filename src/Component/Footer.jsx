import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundImage:"url('/bg3.gif')"}}  className=' bg-cover bg-center py-20 sm:py-40 text-midnight flex justify-center'>
        <div className=' w-[90%] xl:w-[70%] 2xl:w-[50%] text-lg sm:text-xl'>
            <h1 className=' font-bold text-4xl sm:text-7xl mb-5'>Conclusion</h1>
            <p className=' mb-5'>We appreciate XYZ Corp's cooperation and support in the successful implementation of the Website Revamp project. We are committed to ensuring the highest level of satisfaction and look forward to continuing our progress in the next reporting period.</p>
            <p className=' mb-10'>Please feel free to reach out if you have any questions or need further clarification on any aspect of this report.</p>
            <p><span className=' font-bold mb-1'>Prepared by:</span> [Your Name] [Your Position] [Your Contact Information]</p>
            <p><span className=' font-bold mb-1'>​Date:</span> February 1, 2022</p>
        </div>
    </div>
  )
}

export default Footer