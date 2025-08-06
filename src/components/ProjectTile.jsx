import { ComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputer, GithubSolid } from "../assets/icons"
import { useRef, useEffect } from "react"



function ProjectTile1({project}) {

     const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 1 = normal, 2 = 2x speed, 0.5 = half speed
    }
  }, []);

  return (
    <div className='flex flex-wrap w-full mt-15 items-center px-4' >
        <div className='w-full md:w-2/3 h-fit border-2 rounded-lg' style={{borderColor: "oklch(0.63 0.15 255.84)"}}>
            <video ref={videoRef} autoPlay muted   loop className='w-[100%] h-[100%] rounded-lg'>
                <source src={project.media} type="video/mp4"/>
            </video>
        </div>
        <div className='text-white md:w-1/3 flex flex-col  items-center mt-3 md:mt-0 md:items-end gap-3 relative' >
            <p className='uppercase  text-md text-xs md:text-right text-ceter ' style={{ color: "rgb(100, 255, 218)" }}>Featured Project</p>
            <p className='md:text-4xl text-xl md:text-right text-center'>{project.title}</p>
            <div className='relative '>
                <div className=' px-4 py-4 md:w-[470px] text-sm md:text-[1.085rem] w-full md:absolute md:right-0 text-center' style={{backgroundColor: "rgb(17 34 64)"}}>
                    {project.details}
                        </div>
            </div>
            <div className="md:mt-32 flex flex-wrap gap-1 justify-end md:w-[80%]">
                {project.stack.map((stack, index) =>(
                    <span key={index}>|&nbsp;{stack}</span>
                ))}
            </div>

            <div className="flex gap-6 text-xl">
                <a href={project.gitHub} className="text-xl border-gray-500 border w-[100px] py-1 rounded-2xl flex items-center justify-center hover:bg-gray-800"> <GithubSolid className='inline mr-2 shrink-0 '/> Code</a>
                <a href={project.liveLink} className="text-xl border-gray-500 border w-[100px] py-1 rounded-2xl flex items-center justify-center hover:bg-gray-800"><ComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputer className='inline mr-2 shrink-0'/> Live</a>
            </div>

        </div>
    </div>
  )
}

export default ProjectTile1