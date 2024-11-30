import React from 'react'
import pdfIcon from '../assets/pdf.png'

export const AboutMe = () => {
  return (
      <div className='section pad-4'>
        <div className="big-text big-title pad-1">
          <span className="pi"></span>About Me
        </div>
        <div className=" bg-trans-1 div-content small-text pad-3 m-2 round-2">
          <div className="text pad-4">
            <p>I'm a passionate software developer with a flair for creativity. With a strong foundation in HTML, PHP, Laravel, JavaScript, and Bootstrap CSS, I bring ideas to life through clean, efficient code. When I'm not coding, I love to sketch, turning concepts and inspirations into visual art. My unique combination of technical skills and artistic vision drives me to build intuitive, user-focused designs that are as functional as they are beautiful.</p>
            <div className="pt-3">
              <a download="" href="/CV_Heritier.pdf" className="btn-2 medium-text">
                <img src={pdfIcon} alt="" className='pe-1' />Download MyCV
              </a>
            </div>
          </div>        
        </div>
      </div>
  )
}
