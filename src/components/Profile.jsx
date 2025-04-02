import React from 'react'
import Mypic from '/ndanga.jpg';
import pdfIcon from '../assets/pdf.png'
import emailIcon from '../assets/email.png'

export const Profile = () => {
  return (
    <div className="Profile-content p-4 max-sm:px-0">
        <div className="Pic">
            <img src={Mypic} alt="Profile Picture of Umuragwa Ndanga Heritier" />
        </div>
        <div className="iniline-flex flex-col justify-center items-start">
            <p className="text-5xl max-sm:text-3xl font-bold leading-tight pt-5">
                Hello, I'm <span className='color-1'>Umuragwa Ndanga Heritier</span>
            </p>
            <div className="text-3xl max-sm:text-base font-semibold py-3">
                Full-Stack Web Developer
            </div>
            <p className="text-base font-light text-gray-400 max-sm:text-start p-2">
                I am a Codding Geek with over 3 years of experience in crafting dynamic, scalable, and user-friendly web applications. My expertise lies in delivering innovative solutions that bridge creativity and functionality.
            </p>
            <div className="link p-2 iniline-flex items-center gap-x-4 gap-y-2 flex-wrap">
                <a href="#Social" className="rounded-xl max-sm:text-sm max-sm:px-4 max-sm:py-3 px-5 py-3 bg-yellow-700 hover:bg-yellow-800 text-white flex items-center">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="ms-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a download={null} href="/CV_Heritier.pdf" className="btn-2 flex items-center max-sm:text-sm max-sm:px-4 max-sm:py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="pe-1 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  View Resume
                </a>
            </div>
        </div>      
    </div>
  )
}
