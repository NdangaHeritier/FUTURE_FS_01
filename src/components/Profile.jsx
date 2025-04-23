import React from 'react'
import Mypic from '/ndanga.png';
import linkedin from '../assets/linkedin.png';
import ig from '../assets/instagram.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';

export const Profile = () => {
  return (
    <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1 p-4 px-8 max-sm:px-5" id='Profile'>
        <div className="Pic relative">
            <img src={Mypic} alt="Ndanga Heritier" />
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-zinc-950/30"></div> */}
        </div>
        <div className="iniline-flex flex-col justify-center items-start max-sm:items-center max-sm:px-5 w-full">
            <p className="text-5xl max-sm:text-3xl font-bold leading-tight pt-5">
                Hello, I'm <span className='color-1'>Umuragwa Ndanga Heritier</span>
            </p>
            <div className="text-3xl max-sm:text-base font-semibold py-3">
                Full-Stack Web Developer
            </div>
            <p className="text-base font-light text-gray-400 max-sm:text-start py-2">
                I am a Codding Geek with over 3 years of experience in crafting dynamic, scalable, and user-friendly web applications. My expertise lies in delivering innovative solutions that bridge creativity and functionality.
            </p>
            <div className="flex items-center justify-start pt-2">
              <a className="btn-3 flex" href="https://linkedin.com/in/ndanga-heritier">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a className="btn-3 flex" href="https://x.com/UmuragwaH50768">
                <img src={twitter} alt="Twitter" />
              </a>
              <a className="btn-3 flex" href="https://instagram.com/ndangaheritier">
                <img src={ig} alt="Instagram" />
              </a>
              <a className="btn-3 flex" href="https://facebook.com/ndangaheritier">
                <img src={facebook} alt="Facebook" />
              </a>
              <a className="btn-3 flex" href="https://github.com/NdangaHeritier">
                <img src={github} width={20} alt="GitHub" />
              </a>
            </div>
            <div className="link py-2 inline-flex items-center justify-center gap-x-4 gap-y-2 max-sm:grid max-sm:grid-cols-1">
                <a href="#Social" className="rounded-xl max-sm:text-sm max-sm:px-4 max-sm:py-3 px-5 py-3 bg-yellow-700 hover:bg-yellow-800 text-white flex items-center justify-between">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="ms-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a download={null} href="/CV_Heritier.pdf" className="btn-2 flex items-center max-sm:text-sm max-sm:px-4 max-sm:py-3 justify-between max-sm:flex-row-reverse">
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
