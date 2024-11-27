import React from 'react'
import Project1 from '../assets/Airbnb.png'
import Project2 from '../assets/four square.png'
import Project3 from '../assets/getit.jpg'
import github from '../assets/github.png'

export const Projects = () => {
  return (
    <div className='Projects pad-4'>
      <div className="big-text pad-1">
        <span className="pi"></span>Projects
      </div>
      <div className="cards-container">
        
          <div className="card bg-trans-1 round-2">
            <div className="content c1 pad-3 round-2">
              <div>
                <div className="big-text p-2">
                  <span className="pad-1">Airbnb Chrone</span>
                </div>
                <div className="pad-3 small-text">
                  A Place, Cabin, B&B, Home and Hotels booking and Hosting system.
                  <div className="rounds-div pt-2">
                    <span className="rounded-btn m-1">Laravel</span>
                    <span className="rounded-btn m-1">Bootstrap</span>
                    <span className="rounded-btn m-1">MySQL</span>
                  </div>
                </div>
                <div className="pad-1">
                  <a href="https://github.com/NdangaHeritier/Airbnb-project/tree/master" target='_blank' className="btn-3">Github<img src={github} width={20} className='ps-1' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project1} alt="Project-1" height={300} /></div>            
          </div>
        
          <div className="card bg-trans-1 round-2">
            <div className="content c2 pad-3 round-2">
              <div>
                <div className="big-text p-2">
                  <span className="pad-1">Church IMS</span>
                </div>
                <div className="pad-3 small-text">
                  City light Foursquare church christian management system.
                  <div className="rounds-div pt-2">
                    <span className="rounded-btn m-1">PHP</span>
                    <span className="rounded-btn m-1">CSS</span>
                    <span className="rounded-btn m-1">MySQL</span>
                    <span className="rounded-btn m-1">JS</span>
                  </div>
                </div>
                <div className="pad-1">
                  <a href="https://github.com/NdangaHeritier/Airbnb-project/tree/master" target='_blank' className="btn-3">Github<img src={github} width={20} className='ps-1' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project2} alt="Project-1" height={300} /></div>
          </div>
        
          <div className="card bg-trans-1 round-2">
            <div className="content c3 pad-3 round-2">
              <div>
                <div className="big-text p-2">
                  <span className="pad-1">E-Learning System</span>
                </div>
                <div className="pad-3 small-text">
                  A website that help students and other people to enhance their skills online.
                  <div className="rounds-div pt-2">
                    <span className="rounded-btn m-1">HTML</span>
                    <span className="rounded-btn m-1">Javascript</span>
                    <span className="rounded-btn m-1">CSS</span>
                  </div>
                </div>
                <div className="pad-1 ">
                  <a href="https://github.com/NdangaHeritier/Airbnb-project/tree/master" target='_blank' className="btn-3">Github<img src={github} width={20} className='ps-1 ' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project3} alt="Project-1" height={300} /></div>
          </div>          
        </div>
      </div>
  )
}
