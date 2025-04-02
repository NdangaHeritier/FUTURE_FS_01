import React from 'react'

export const Education = () => {
  return (
    <div className='px-8 max-sm:px-5'>
      <div className="big-text big-title pad-1">
        <span className="pi"></span>Education
      </div>
      <div className="div-content bg-trans-1 pad-3 my-2 round-2">
        <div className="medium-text pad-2">
          <span className="pi-2"></span>Lycee Saint Alexandre Sauli De Muhura
        </div>
        <div className="p-4 pb-0 text-gray-500 inline-flex items-center max-sm:flex-col max-sm:items-start lg:gap-x-10 gap-x-3 gap-y-2 text-sm">
          <span>Sept 2021 - Aug 2024</span>
          <span className='text-slate-400 inline-flex items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.75c4.97-4.97 8.25-8.25 8.25-12A8.25 8.25 0 0 0 3.75 9.75c0 3.75 3.28 7.03 8.25 12z"
              />
              <circle cx="12" cy="9.75" r="2.25" />
            </svg>
            Gatsibo, East Rwanda
          </span>
        </div>
        <div className="text p-4 small-text">
          Lycee De Muhura is a TSS school located in Gatsibo District in Eastern Province of Rwanda, 
          where I obtained my High School Diploma in Software Development in <u>August 2024</u>. 
          During my time here, I developed outstanding skills to create custom solutions for businesses. 
          Notably, I collaborated with my colleagues to create a School Stock Management System during 
          the school Open Day, which received excellent reviews and delivered impressive results.
          
        </div>  
        <div className="inline-flex items-center flex-wrap">
            <div className='pad-1'><span className="bg-green-950 border border-green-800 text-green-400 rounded-lg px-2 py-1 text-xs">HTML</span></div>            
            <div className='pad-1'><span className="bg-blue-950 border border-blue-800 text-blue-400 rounded-lg px-2 py-1 text-xs">CSS</span></div>
            <div className='pad-1'><span className="bg-violet-950 border border-violet-800 text-violet-400 rounded-lg px-2 py-1 text-xs">PHP</span></div>
            <div className='pad-1'><span className="bg-yellow-950 border border-yellow-800 text-yellow-400 rounded-lg px-2 py-1 text-xs">Diploma</span></div>
          </div>      
      </div>
    </div>
  )
}
