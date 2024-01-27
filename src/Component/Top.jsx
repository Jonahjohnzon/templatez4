import React from "react";

const Top = () => {
  return (
    <div className=" text-midnight flex justify-center bg-cover bg-center" style={{backgroundImage:"url('/bg.gif')"}}>
      <div className=" flex flex-col sm:flex-row justify-between w-[95%] sm:w-[90%] py-32 sm:py-52">
        <section className=" w-full  flex justify-center mb-5 sm:mb-0">
            <div>
          <h3 className=" text-3xl sm:text-5xl font-bold mb-10" >Your Company Name</h3>
          <h1 className=" text-4xl xl:text-7xl font-bold mb-1 sm:mb-5">Web Development </h1>
          <h1 className="text-4xl xl:text-7xl font-bold mb-5">Progress Report</h1>
          <div className=" text-xl">
            <p>
              <span className=" font-bold  ">Client:</span> XYZ Corp
            </p>
            <p>
              <span className=" font-bold">​Project:</span> Website Revamp
            </p>
            <p>
              <span className=" font-bold">​Reporting Period:</span> January 1,
              2022 - January 31, 2022
            </p>
          </div>
          </div>
        </section>
        <section className=" w-full flex justify-center sm:justify-end items-center">
          <div className=" w-[85%]"><img src="/com.avif" className="w-full"/></div>
        </section>
      </div>
    </div>
  );
};

export default Top;
