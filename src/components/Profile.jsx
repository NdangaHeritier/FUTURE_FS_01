import React from 'react'
import Mypic from '/ndanga.jpg';
import pdfIcon from '../assets/pdf.png'
import emailIcon from '../assets/email.png'

export const Profile = () => {
  return (
    <div className="Profile-content p-4">
        <div className="Pic">
            <img src={Mypic} alt="" />
        </div>
        <div className="About">
            <p className="big-text">A'm <span className='color-1'>Umuragwa Ndanga Heritier</span>, Full-Stack Website Developer</p>
            <p className="small-text">Full-Stack Developer with 2+ Years of Experience | Skilled in Building Dynamic and Scalable Web Solutions.</p>
            <div className="link pad-2">
                <a href="#Social" className="btn-1">
                  <img src={emailIcon} alt="" className='pe-1' />Contact
                </a>
                <a download={null} href="/CV_Heritier.pdf" className="btn-2">
                  <img src={pdfIcon} alt="" className='pe-1' />Resume
                </a>
            </div>
        </div>      
    </div>
  )
}
