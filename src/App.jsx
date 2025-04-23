import SocialLinks from './components/SocialLinks'
import { Profile } from './components/Profile'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import logo from './assets/LOGO-Color.png'
import { AboutMe } from './components/AboutMe'

function App() {

  function showNav(){
    let showLink=document.getElementsByClassName('showLink')[0]
    if(showLink.innerHTML=='X'){
      document.querySelector('#HeaderLinks').classList.add('max-sm:hidden')
      document.querySelector('#HeaderLinks').classList.remove('max-sm:block')
      showLink.style.backgroundColor="transparent"
      showLink.innerHTML=`<img src="/bars.png" alt="" />`
    }else{
      document.querySelector('#HeaderLinks').classList.add('max-sm:block')
      document.querySelector('#HeaderLinks').classList.remove('max-sm:hidden')
      showLink.style.backgroundColor="rgba(12, 8, 2, 0.8)"
      showLink.innerHTML="X"
    }
  }
  return (
    <div className='Main'>
        <div className="Header backdrop-blur-sm sticky top-0 left-0 right-0 z-10">
          <div className="Title flex">
            <img src={logo} alt="Logo" height={50} className='h-14 max-sm:h-10' />
            <span className='ps-0'>danga.</span>
          </div>
          <div className="Header-links min-sm:flex max-sm:hidden" id='HeaderLinks'>
            <div className='p-2 max-sm:my-8 a'><a href="#AboutMe" onClick={()=>{showNav()}}>About</a></div>
            <div className='p-2 a'><a href="#Education" onClick={()=>{showNav()}}>Education</a></div>
            <div className='p-2 a'><a href="#Experience" onClick={()=>{showNav()}}>Experience</a></div>
            <div className='p-2 a'><a href="#Skills" onClick={()=>{showNav()}}>Skills</a></div>
            <div className='p-2 a'><a href="#Projects" onClick={()=>{showNav()}}>Projects</a></div>
            <div className='p-2 a'><a href="#Social" onClick={()=>{showNav()}}>Contact</a></div>
          </div>
          <div className="bars">
            <button className="showLink" onClick={()=>{showNav()}}>
              <img src="/bars.png" alt="" />
            </button>
          </div>
        </div>
        <div className="Contents pt-10 grid grid-cols-1 gap-y-10">
          <div className='flex items-center justify-center' id='About'>
            <Profile/>          
          </div>
          <div id='AboutMe'><AboutMe/></div>
          <div id='Education'><Education/></div>
          <div id='Experience'><Experience/></div>
          <div id='Skills'><Skills/></div>
          <div id='Projects'><Projects/></div>
          <div id='Social'><SocialLinks/></div>
        </div>
        <div className=" flex items-center justify-between max-sm:flex-col bg-zinc-900 p-5 small-text">
          <p>&copy; &nbsp; Ndanga Heritier, All rights reserved.</p>
          <div className="fw-semibold max-sm:flex self-end bg-yellow-700/10 max-sm:text-xs rounded-md px-1 py-0.5 border border-yellow-700/70 ring-3 ring-yellow-700/20">
            <span className='text-yellow-700 fw-bold pe-1'>@</span>dev~ndanga
          </div>
        </div>
    </div>
  )
}

export default App
