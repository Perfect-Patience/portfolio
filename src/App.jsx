import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import { useEffect } from "react";


function ScrollToSection (){
  const location = useLocation();

  useEffect(()=>{
    const section = location.pathname.replace("/", "") || "home";

    const element = document.getElementById(section);
    if(element){
      element.scrollIntoView({behavior: "smooth"});
    }
  }, [location]);

  return <MainLayout/>;
}


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ScrollToSection/>}/>
      <Route path="about" element={<ScrollToSection/>}/>
      <Route path="resume" element={<ScrollToSection/>}/>
      <Route path="portfolio" element={<ScrollToSection/>}/>
      <Route path="contact" element={<ScrollToSection/>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App;