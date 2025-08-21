import { ArrowDown, ArrowRight } from "../assets/icons";
import profile from "../assets/file.svg";
import tagIcon from "../assets/tagicon3d.png";
import github from "../assets/gitHubIcon.png";
import linkedIn from "../assets/linkedInIcon.png";
import resume from "../assets/Perfect Patience Dah CV.pdf";
import { NavLink } from "react-router";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home-gradient  items-center flex pb-20 md:px-3 " id="home">
      <div className=" flex lg:flex-row flex-col w-full lg:px-30  gap-25 max-w-[1800px] mx-auto mt-13 lg:mt-auto    justify-center relative lg:justify-between  items-center">
        <div className=" flex flex-col justify-center md:items-center mx-6 md:mx-0 lg:items-start md:w-full lg:w-fit md:m-auto  lg:m-0">
          <div className="flex flex-col gap-8  lg:text-left">
           
            <p className="lg:text-8xl md:text-6xl text-4xl font-semibold text-white ">
              Hello, my <br /> name's{" "}
              <span className="inline-block" style={{ color: "oklch(0.62 0.19 256.92)" }}>
               <Typewriter options={{strings: "Perfect", autoStart:true, loop:true}}/>
              </span>
              .
            </p>
            <p className="md:text-3xl  lg:text-2xl font-light text-white mr-15 md:mr-0">
              I'm a software developer who is <br/>passionate about
              bringing ideas to life<br/> through coding.
            </p>

            <div className="flex   flex-wrap md:flex-row flex-col gap-6 lg:mt-9 text-xl ">
            <a href={resume} download="resume" className=" w-[220px] py-3  flex items-center justify-center rounded-4xl text-white font-semibold cursor-pointer home-button-1">
              Download cv
            </a>
            <NavLink to={"/portfolio"}
              className="border-2 text-white w-[220px] py-3 rounded-4xl  cursor-pointer flex items-center justify-center home-button-2"
              style={{ borderColor: "oklch(0.65 0.17 254.68)" }}
            >
              My Works <ArrowRight className={"inline ml-4"} />
            </NavLink>
          </div>
          </div>
          
        </div>
        <div 
          className="border p-6 relative  w-fit"
          style={{
            borderColor: "oklch(0.3 0.12 276.79)",
            borderRadius: "15rem",
          }}
        >
          <img src={tagIcon} alt="" className=" absolute -top-7.5 -left-6" />
          <div
            className="border p-6 "
            style={{
              borderColor: "oklch(0.35 0.11 273.14)",
              borderRadius: "13.5rem",
            }}
          >
            <div
              className="lg:w-[22rem] lg:h-[32rem] md:w-[25rem] md:h-[35rem] w-[15rem] h-[25rem] flex items-center justify-center"
              style={{
                borderRadius: "12rem",
                backgroundColor: "oklch(0.65 0.15 253.71)",
              }}
            >
              <div
                className="w-[95%] h-[95%]  "
                style={{ borderRadius: "11rem" }}
              >
                <img
                  src={profile}
                  alt="a woman looking at a laptop"
                  className="object-cover w-full h-full "
                  style={{ borderRadius: "11.2rem" }}
                />
              </div>
            </div>
          </div>
          <img
            src={tagIcon}
            alt=""
            className=" absolute -bottom-7.5 -right-6"
          />
        </div>
      </div>
      <div className="absolute h-fit top-[20rem] right-0  ">
        <p className="text-xl uppercase text-white rotate-90 "> Follow me </p>
        <ArrowDown className={"absolute top-25 left-10 text-2xl text-white "} />
        <div className="absolute top-35 left-8 flex flex-col  gap-4">
          <a
            href="https://github.com/Perfect-Patience"
            target="_blank"
            className="hover:scale-125 transition-transform duration-100 ease-in"
          >
            <img src={github} className="w-[2.5rem]" alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/perfect-patience-dah

"
            className="hover:scale-125 transition-transform duration-100 ease-in" target="_blank"
          >
            <img src={linkedIn} className="w-[2.5rem]" alt="linkedIn logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
