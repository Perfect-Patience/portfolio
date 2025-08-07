import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/portfolioLogo.svg";
import { HamburgerMenu, OutlineClose } from "../assets/icons";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)
 
 function toggleHamburger(){
  
    const menu =  document.querySelector('.hamburger-dropdown');
    if(!showMenu){
      menu.classList.remove('hidden');
      menu.classList.remove('hide');
      menu.classList.add('show');
      
      setShowMenu(true);
    }

    if(showMenu){
      menu.classList.remove('show');
      menu.classList.add('hide');
      setShowMenu(false);
    }


    

 }

  return (
    <div className="absolute  w-full h-[5rem]  top-0 left-0 z-40 md:px-15 lg:px-20 px-5 flex justify-between items-center ">
      <div className=" w-60">
        <img src={logo} alt="logo" />
      </div>
      <div className="md:block hidden">
        <nav className="flex gap-10 text-lg font-medium text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"portfolio"}>Portfolio</NavLink>
          <NavLink to={"resume"}>Resume</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </nav>
      </div>
      <div className="md:hidden  flex flex-col overflow-x-hidden">
       <button onClick={() => toggleHamburger()}> {
          showMenu? <OutlineClose className={"text-3xl text-white"} /> :
        <HamburgerMenu className={"text-3xl text-white"}  />
        }</button>
        <ul className=" flex flex-col fixed top-[6rem] w-full h-screen hide hamburger-dropdown text-white pt-10 px-8 gap-8 text-xl ">
          <NavLink to="/">Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"portfolio"}>Portfolio</NavLink>
          <NavLink to={"resume"}>Resume</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
          {/* <div className="flex flex-col items-start gap-8">
            <button className=" bg-blue-700 px-6 py-2 rounded-3xl text-white">
              Download CV
            </button>
            <button className=" bg-blue-900 px-6 py-2 rounded-3xl text-white">
              Contanct Me
            </button>
          </div> */}
        </ul>
      
      </div>
    </div>
  );
}

export default NavBar;
