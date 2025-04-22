import React from 'react'
import SkillCard from './SkillCard'

export const Skills = () => {
  return (
    <div className='p-8 max-sm:px-5 bg-trans-2 my-10'>
      <div className="big-text big-title pad-1">
        <span className="pi"></span>Skills
      </div>
      <div className="div-content pad-3 my-2 round-2">
        <div className="text p-4 small-text">
          I have a diverse skill set that allows me to tackle various challenges in web development. 
          My expertise includes:
        </div>

        <p className="p-2 rounded-t-lg border border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Front-end Web Developement.
        </p>
        <div className="p-2 py-5 border-r border-l border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="AOS Animation" />            
            <SkillCard name="TailwindCSS" />
            <SkillCard name="ReactJS" />
            <SkillCard name="NextJS" />
            <SkillCard name="HTML & JS & CSS" />
            <SkillCard name="BootstrapCSS" />
            <SkillCard name="TypeScript" />
        </div>

        <p className="p-2 border border-t-0 border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Back-end Web Developement.
        </p>
        <div className="p-2 py-5 border-r border-l border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="NodeJS" />    
            <SkillCard name="ExpressJS" />
            <SkillCard name="PHP" />
            <SkillCard name="Laravel" />
            <SkillCard name="MongoDB" />            
            <SkillCard name="PocketBase" />            
            <SkillCard name="MySQL-MariaDB" />
        </div>

        <p className="p-2 border border-t-0 border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Programming Languages
        </p>
        <div className="p-2 py-5 border-r border-l border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="Javascript" />    
            <SkillCard name="Python" />
            <SkillCard name="PHP" />
            <SkillCard name="C" />
            <SkillCard name="C++" />
        </div>


        <p className="p-2 border border-t-0 border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Web And Graphic Design.
        </p>
        <div className="p-2 py-5 border-r border-l border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="Figma" />
            <SkillCard name="Photoshop" />
            <SkillCard name="Canva" />
            <SkillCard name="Sketch" />
        </div>

        <p className="p-2 border border-t-0 border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Other Skills.
        </p>
        <div className="p-2 py-5 border-r border-l border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="Git & GitHub" />            
            <SkillCard name="Agile Methodologies" />
            <SkillCard name="Problem Solving" />
            <SkillCard name="Teamwork" />
            <SkillCard name="Communication" />
            <SkillCard name="Time Management" />
        </div>
        <p className="p-2 border border-t-0 border-white/20 bg-trans-1 text-slate-300 font-bold inline-flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-600/30 rounded-full p-1 h-6 w-6 me-2 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="#f57f17" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.28 1.11 4.3 2.8 5.6.4.3.7.8.7 1.3v1.1a1 1 0 001 1h6a1 1 0 001-1v-1.1c0-.5.3-1 .7-1.3A7.003 7.003 0 0019 9a7 7 0 00-7-7zM9 21h6m-6-2h6" />
          </svg>
          Languages.
        </p>
        <div className="p-2 py-5 rounded-b-lg border border-t-0 border-white/20 bg-trans-2 w-full inline-flex items-center flex-wrap">
            <SkillCard name="Kinyarwanda" />            
            <SkillCard name="English" />
        </div>


        <div className="text py-4 small-text text-slate-300 rounded-lg my-2">          
          I am a quick learner and a team player, always eager to collaborate with others to achieve common goals.
          My goal is to leverage my skills and knowledge to contribute to innovative projects that make a positive impact on users and businesses alike.
          </div>        
      </div>
    </div>
  )
}
