import React from 'react'
import Mypic from '/ndanga.jpg';
import pdfIcon from '../assets/pdf.png'
import emailIcon from '../assets/email.png'

export const Profile = () => {
  return (
    <div className="Profile-content p-4">
        <div className="Pic">
            <img src={Mypic} alt="Profile Picture of Umuragwa Ndanga Heritier" />
        </div>
        <div className="flex flex-col justify-center items-start">
            <p className="text-5xl max-sm:text-3xl font-bold leading-tight">
                Hello, I'm <span className='color-1'>Umuragwa Ndanga Heritier</span>
            </p>
            <div className="text-3xl font-bold py-3">
                Passionate Full-Stack Website Developer
            </div>
            <p className="small-text">
                I am a Full-Stack Developer with over 3 years of experience in crafting dynamic, scalable, and user-friendly web applications. My expertise lies in delivering innovative solutions that bridge creativity and functionality.
            </p>
            <div className="link p-2 flex">
                <a href="#Social" className="rounded-xl px-5 py-3 bg-yellow-700 text-white flex items-center">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a download={null} href="/CV_Heritier.pdf" className="btn-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="pe-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  View Resume
                </a>
            </div>
        </div>      
    </div>
  )
}
