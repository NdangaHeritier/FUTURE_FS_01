import React from 'react'
import Project1 from '../assets/Airbnb.png'
import Project2 from '../assets/es-shop.jpg'
import Project3 from '../assets/getit.jpg'
import github from '../assets/github.png'

export const Projects = () => {
  return (
    <div className='section'>
      <div className="big-text big-title pad-4">
        <span className="pi"></span>Projects
      </div>
      <div className="cards">
        <div className="">
          <div className="card bg-trans-1 round-2">
            <div className="content c1 pad-3 round-2">
              <div>
                <div className="big-text">
                  <span className="">Airbnb Chrone</span>
                </div>
                <div className="pad-3 small-text">
                  A Place, Cabin, B&B, Home and Hotels booking and Hosting system.
                  <div className="rounds-div">
                    <span className="rounded-btn m-1">Laravel</span>
                    <span className="rounded-btn m-1">Bootstrap</span>
                    <span className="rounded-btn m-1">MySQL</span>
                  </div>
                </div>
                <div className="link">
                  <a href="https://github.com/NdangaHeritier/Airbnb-project/tree/master" target='_blank' className=""><img src={github} width={20} className='ps-1' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project1} alt="Project-1" width="100%" /></div>            
          </div>          
        </div>
        <div className="">
          <div className="card bg-trans-1 round-2">
            <div className="content c2 pad-3 round-2">
              <div>
                <div className="big-text">
                  <span className="">es-shop</span>
                </div>
                <div className="pad-3 small-text">
                  A shoes online shop to help clients get best Nike products by one tap.
                  <div className="rounds-div">
                    <span className="rounded-btn m-1">JS</span>
                    <span className="rounded-btn m-1"><strike>Node.JS</strike></span>
                    <span className="rounded-btn m-1">CSS</span>
                  </div>
                </div>
                <div className="link">
                  <a href="https://github.com/NdangaHeritier/FUTURE_FS_02/" target='_blank' className=""><img src={github} width={20} className='ps-1' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project2} alt="Project-1" width="100%" /></div>
          </div>          
        </div>
        <div className="">
          <div className="card bg-trans-1 round-2">
            <div className="content c3 pad-3 round-2">
              <div>
                <div className="big-text">
                  <span className="">Getit</span>
                </div>
                <div className="pad-2 small-text">
                  An E-learning system to help rwandan youth gather Main Software Development Esssentials for free.
                  <div className="rounds-div">
                    <span className="rounded-btn m-1">Laravel</span>
                    <span className="rounded-btn m-1">Bootstrap</span>
                    <span className="rounded-btn m-1">MySQL</span>
                  </div>
                </div>
                <div className="link">
                  <a href="#" target='_blank' className=""><img src={github} width={20} className='ps-1' /></a>
                </div>
              </div>
            </div>
            <div className='img'><img src={Project3} alt="Project-1" width="100%" /></div>
          </div>          
        </div>
      </div>
    </div>
  )
}
