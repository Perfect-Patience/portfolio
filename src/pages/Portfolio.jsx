import React from 'react'
import ProjectTile1 from '../components/ProjectTile'
import ProjectTile2 from '../components/ProjectTile2'
const projects = [
  {
    title: "DevCollab",
    details: "A collaborative platform for developers to connect, join projects, and work together in real-time. Users can explore ongoing projects, request to join, and manage collaboration roles.",
    stack: ["React", "HTML", "CSS"],
    gitHub: "https://github.com/perfect-patience",
    liveLink: "#",
    media: "src/assets/devColab.mp4"

  },
  {
        title: "DevJobs",
    details: "A movie browsing application that lets users search for movies, view details like ratings and descriptions, and watch trailers. Powered by a movie API for real-time data.",
    stack: ["React", "HTML", "CSS"],
    gitHub: "https://github.com/perfect-patience",
    liveLink: "#",
    media: "src/assets/devJobs.mp4",
  },
  {
        title: "Movie APP",
    details: "A movie browsing application that lets users search for movies, view details like ratings and descriptions, and watch trailers. Powered by a movie API for real-time data.",
    stack: ["React", "HTML", "CSS"],
    gitHub: "https://github.com/perfect-patience",
    liveLink: "#",
    media: ""
  }
]
function Portfolio() {
  return (
    <section className=' ' id="portfolio" style={{backgroundColor: "oklch(0.25 0.1 282.21)"}}>
      <div>
        <div className='max-w-[1200px]  mx-auto px-4 pt-40 pb-20'>
        <div className='flex gap-6 items-center'>
        <h2 className='text-5xl text-white'>Portfolio</h2>
        <div className='w-full h-0.5 rounded-full' style={{ backgroundColor: "oklch(0.63 0.15 255.84)" }}></div>
      </div>
      <div className='grid gap-10'>
        
      {projects.map((project, index) => (
        
        index % 2 == 0? <ProjectTile1 key={index} project={project}/> : <ProjectTile2 key={index} project={project}/>))}
      </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio