import React from 'react'

export const AboutMe = () => {
  return (
      <div className='px-8 max-sm:px-5'>
        <div className="big-text big-title pad-1">
          <span className="pi"></span>About Me
        </div>
        <div className="bg-yellow-950 div-content small-text pad-3 my-2 round-2">
          <div className="text pad-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="pe-1" 
              style={{ width: '64px', height: '64px', marginBottom: '16px' }}
            >
              <path d="M12 2a5 5 0 00-5 5v1H6a4 4 0 00-4 4v5h2v-5a2 2 0 012-2h12a2 2 0 012 2v5h2v-5a4 4 0 00-4-4h-1V7a5 5 0 00-5-5zm-1 14h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
            </svg>
            <p>
              My journey into software development began when I watched my elder brother coding. His passion and creativity inspired me to dive into the world of programming. I started practicing on my own and later attended software development courses during my upper secondary school years. These courses helped me build a strong foundation in coding and problem-solving.
            </p>
            <p className='py-5'>
              Over the years, I have participated in several internships, both onsite and remote, where I honed my skills and gained practical experience. These opportunities allowed me to work on real-world projects, earning certificates that validate my ability to tackle complex challenges and craft custom solutions.
            </p>
            <p>
              My technical expertise includes:
            </p>
            <div className="py-3 flex flex-wrap items-start justify-start">
               <code className='bg-gray-200/10 px-1 rounded-sm me-1 mb-1'>Front-End Development</code>,
                <code className='bg-gray-200/10 px-1 rounded-sm me-1 mb-1'>Back-end Development</code>,
                <code className='bg-gray-200/10 px-1 rounded-sm me-1 mb-1'>Responsive Design & Development</code>,
                <code className='bg-gray-200/10 px-1 rounded-sm me-1 mb-1'>Web Design</code>,
            </div>
            <p>
              I am passionate about creating intuitive, user-focused designs that are both functional and visually appealing. When I'm not coding, I enjoy sketching, turning ideas into visual art that complements my technical skills.
            </p>
            <div className="pt-3 md:flex items-center justify-start gap-2 max-sm:grid max-sm:grid-cols-1">
              <a 
                download="CV_Heritier.pdf" 
                href="/CV_Heritier.pdf" 
                className="btn-2 max-sm:text-sm flex items-center ring-2 ring-yellow-900 justify-between" 
                aria-label="Download my resume in PDF format"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="pe-1" 
                  style={{ width: '32px', height: '32px' }}
                >
                  <path d="M12 16.5l4-4h-3V3h-2v9.5H8l4 4zm-6 2.5h12v2H6v-2z" />
                </svg>
                Download Resume
              </a>

              <a href="#Social" className="rounded-xl px-5 py-4 bg-yellow-700 hover:bg-yellow-800 text-white flex items-center justify-between">
                  Let's Talk
                  <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
            </div>
          </div>        
        </div>
      </div>
  )
}
