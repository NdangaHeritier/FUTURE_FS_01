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
      document.getElementById('HeaderLinks').style.display="none"
      showLink.style.backgroundColor="transparent"
      showLink.innerHTML=`<img src="/bars.png" alt="" />`
    }else{
      document.getElementById('HeaderLinks').style.display="block"
      showLink.style.backgroundColor="rgba(12, 8, 2, 0.8)"
      showLink.innerHTML="X"
    }
  }
  return (
    <div className='Main'>
        <div className="Header backdrop-blur-sm sticky top-0 left-0 right-0 z-10">
          <div className="Title flex">
            <img src={logo} alt="Logo" height={50} className='h-14' />
            <span className='ps-1'>danga.</span>
          </div>
          <div className="Header-links" id='HeaderLinks'>
            <div className='pad-1 a'><a href="#AboutMe">About</a></div>
            <div className='pad-1 a'><a href="#Education">Education</a></div>
            <div className='pad-1 a'><a href="#Experience">Experience</a></div>
            <div className='pad-1 a'><a href="#Skills">Skills</a></div>
            <div className='pad-1 a'><a href="#Projects">Projects</a></div>
            <div className='pad-1 a'><a href="#Social">Contact</a></div>
          </div>
          <div className="bars">
            <button className="showLink" onClick={()=>{showNav()}}>
              <img src="/bars.png" alt="" />
            </button>
          </div>
        </div>
        <div className="Contents px-8 py-10">
          <div className='flex' id='About'>
            <Profile/>          
          </div>
          <div id='AboutMe'><AboutMe/></div>
          <div id='Education'><Education/></div>
          <div id='Skills'><Skills/></div>
          <div id='Experience'><Experience/></div>
          <div id='Projects'><Projects/></div>
          <div id='Social'><SocialLinks/></div>
        </div>
        <div className="footer pad-4 small-text">
          &copy; &nbsp; Ndanga, All rights reserved.
        </div>
    </div>
  )
}

export default App
