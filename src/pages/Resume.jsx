import React from "react";

function Resume() {
  const stack = [
    "React",
    "Tailwind CSS",
    "Express",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Figma",
    "AWS",
    "MongoDB",
    "MySQL",
  ];
  return (
    <section className=""  id="resume" style={{ backgroundColor: "oklch(0.25 0.1 282.21)" }}>
      <div className="max-w-[1200px]  mx-auto px-4 pt-5">
        {/* <div className="flex gap-6 items-center">
          <h2 className="text-5xl text-white">Resume</h2>
          <div
            className="w-full h-0.5 rounded-full"
            style={{ backgroundColor: "oklch(0.63 0.15 255.84)" }}
          ></div>
        </div> */}

        <div className="flex  flex-wrap md:flex-nowrap pb-5 gap-25 mt-15 text-white">
          <div className="shrink-0 min-w-[280px]">
            <h4 className="text-3xl font-medium ">Tech Stack</h4>
            <p className="uppercase text-lg mt-1">Tools and Technologies</p>
          </div>
          <div className="flex gap-8 w-full flex-wrap">
            {stack.map((tech) => (
              <img className="w-12" src={`./tech-icons/${tech}.svg`} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Resume;
