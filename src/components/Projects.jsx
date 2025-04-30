import React from 'react'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'
// import Project4 from '../assets/project4.png'
import Project5 from '../assets/project5.png'
import Project6 from '../assets/project6.png'
import Project7 from '../assets/project7.png'
import Project8 from '../assets/project8.png'
import Project9 from '../assets/project9.png'
import SkillCard from './SkillCard'

const projectItems = [
  {
    title: "Tujyane Travels",
    image: Project1,
    description: "A Ride Sharing Agency that connect people to share a ride.",
    technologies: ["NextJS", "TailwindCSS", "NodeJS"],
    client: "Tujyane Travels Ltd",
    iWasWorkingAt: {
      name: "InfinityTechSolutions",
      role: "FullStack Developer",
      url: "https://infinitytech.rw/"
    },    
    url: "https://tujyanedevistooconcerned.vercel.app/",
    year: "Under Developement"
  },
  {
    title: "Corporate Website.",
    image: Project9,
    description: "A corporate website to showcase services and contacts for a road construction company based in Rwanda.",
    technologies: ["ReactJs", "React Router", "SEO"],
    client: "Real Labest Group Ltd",
    iWasWorkingAt: {
      name: "InfinityTechSolutions",
      role: "FullStack Developer",
      url: "https://infinitytech.rw/"
    },
    url: "https://reallabest.com/",
    year: 2025
  },  
  {
    title: "Oshil - Event Production and Management",
    description: "A website for an event production and management company.",
    image: Project2,
    technologies: ["AOS Animation", "TailwindCSS", "JavaScript"],
    client: "Oshil Events",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Front-end Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://oshilevents.vercel.app/",
    year: "2025",
  },
  {
    title: "JubaPay USSD Simulator ",
    description: "JubaPay make it easy for South Sudan people to make money transactions using USSD Technology",
    image: Project3,
    technologies: ["HTML", "JavaScript", "TailwindCSS"],
    client: "JubaPay Ltd",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Front-end Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://intare1245590juay.vercel.app/",
    year: "2025",
  },
  // {
  //   title: "NileGreenEnergy Landing Page",
  //   description: "Bringing solar energy to rural South Sudan.",
  //   image: Project4,
  //   technologies: ["HTML", "TailwindCSS", "JavaScript", "Web3CSS Animations"],
  //   client: "NileGreenEnergy Ltd",
  //   url: "https://mynilegreen2682526827vercel.vercel.app/",
  //   year: "2025",
  // },
  {
    title: "RQSSA Quantity Surveyors based in Rwanda.",
    image: Project5,
    description: "A website for a company that provides quantity surveying services in Rwanda.",
    technologies: ["ReactJS", "TailwindCSS"],
    client: "RQSSA Association",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Fullstack Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://why-rqsagotg10times.vercel.app/",
    year: "2024-2025",
  },
  {
    title: "Airbnb Clone",
    image: Project6,
    description: "A Place, Cabin, B&B, Home and Hotels booking and Hosting system.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    client: "self project",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Fullstack Laravel Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://github.com/Ndangaheritier/airbnb-project/tree/main/",
    year: "2024",
  },
  {
    title: "ES Shop",
    image: Project7,
    description: "An E-commerce website for selling and buying products.",
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "self project",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Front-end Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://es-shop.vercel.app/",
    year: "2024",
  },
  {
    title: "ToDo List App",
    image: Project8,
    description: "An extended ToDo List application that allow creating, editing and removing tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    client: "self project",
    iWasWorkingAt: {
      name: "dev~ndanga",
      role: "Front-end Developer",
      url: "https://ndanga-heritier.vercel.app/#about"
    },
    url: "https://mytodoapp-js.vercel.app/",
    year: "2024",
  },
]
export const Projects = () => {
  return (
    <div className='section bg-trans-2 p-10 max-sm:px-5'>
      <div className="big-text big-title pad-4">
        <span className="pi"></span>Projects
      </div>
      <p className="text-slate-400 px-5">
        I have worked on several projects, both personal and professional. Here are some of the projects I have worked on since Jan 2024:
      </p>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {projectItems.map((item, index) => (
            <div key={index} className="card bg-trans-1 rounded-2xl shadow-md relative">
              <img src={item.image} alt={item.title} className="w-full h-56 max-sm:h-48 object-fill border-b border-b-slate-800 rounded-t-2xl mb-4  bg-zinc-700" />
              <div className="content p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex items-center text-xs p-1 py-0.5 gap-2 border-s-4 border-zinc-600 bg-zinc-600/10 mt-1">
                  <a href={item.iWasWorkingAt.url} target="_blank" rel="noopener noreferrer" className="text-zinc-300 font-semibold hover:text-zinc-100">
                    <span className="text-zinc-400">@</span>
                    {item.iWasWorkingAt.name}
                  </a>
                  <span className="text-slate-400">as</span>
                  <span className="text-slate-100 font-light">{item.iWasWorkingAt.role}</span>
                </div>                
                <p className="text-slate-100 text-sm py-2">Client: {item.client}</p>
                <p className="text-gray-400">{item.description}</p> 
                <div className='pt-2 text-sm text-yellow-600'>Skills Used:</div>               
                <p className="inline-flex flex-wrap pt-1">
                  {item.technologies.map(tech =>
                    {
                      return (
                          <div key={tech}>
                            <SkillCard name={tech} />
                          </div>
                        )
                    }
                  )}
                </p>
                <div className="absolute top-0 right-0 left-0 h-56 rounded-t-lg flex flex-col items-end p-3 justify-between bg-gradient-to-r from-transparent to-zinc-950/30">
                  <p className="bg-slate-200 text-slate-950 font-semibold rounded-lg px-2 py-1 text-sm">{item.year}</p>
                  {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 text-slate-100 inline-flex items-center hover:bg-slate-950 border border-slate-700 bg-trans-2 rounded-lg px-2 py-1 text-sm font-semibold">
                    <span className="border-t-2 border-l-2 border-gray-400 h-2 w-2 me-1 rounded-tl-sm"></span>Visit
                  </a>
                  )}
                </div>
                
              </div>
            </div>
          ))}

          {/* custom card */}

          <div className="flex p-5 items-center justify-center flex-col bg-yellow-700 rounded-2xl shadow-md relative">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 text-yellow-700 rounded-lg bg-white p-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold pt-10 text-center">Let's talk about your project</h3>
              <p className="text-gray-300 text-center p-5">I am always open to discussing your project and helping you with your design needs.</p>
              <div className="content p-4">
                <a href="#Social" className="bg-slate-100 rounded-xl px-5 py-3 text-yellow-700 font-semibold flex">
                  Let's Talk
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline-block ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
