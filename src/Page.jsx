import React from 'react'
import Top from './Component/Top'
import Introduction from './Component/Introduction'
import Tasks from './Component/Task'
import Upcoming from './Component/Upcoming'
import Issue from './Component/Issue'
import Project from './Component/Project'
import Footer from './Component/Footer'

const Page = () => {
  return (
    <div className=' font-arsenal overflow-x-hidden'>
       <Top/>
       <Introduction/>
       <Tasks/>
       <Upcoming/>
       <Issue/>
       <Project/>
       <Footer/>
    </div>
  )
}

export default Page