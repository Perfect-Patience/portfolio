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

        <div className="flex  flex-wrap md:flex-nowrap gap-25 mt-15 text-white">
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

        <div className="flex gap-25 flex-wrap text-white mt-20 pb-27">
          <div className="shrink-0 min-w-[280px] ">
            <h4 className="text-3xl font-medium">Education</h4>
            <p className="uppercase text-lg mt-1">Academic Timeline</p>
          </div>
          <div className="flex gap-4 flex-1">
            <div className="flex flex-col gap-[5px] items-center relative">
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
              <div className="h-[200px] w-0.5 bg-white"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
              <div className="h-[200px] w-0.5 bg-white"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col gap-[227px] w-[300px] md:w-full">
              <div className="relative ">
                <div className="absolute">
                  <p>February, 2025 - Present</p>
                  <p className="uppercase font-semibold text-lg">
                    Software Developer Trainee
                  </p>
                  <p className="text-gray-500">Developers' In Vogue</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute">
                  <p>February, 2025 - June, 2025</p>
                  <p className="uppercase font-semibold text-lg">
                    AWS ReStart Trainee
                  </p>
                  <p className="text-gray-500">Amalitech Gmb.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute">
                  <p>September 2019 - November 2023</p>
                  <p className="uppercase font-semibold text-lg">
                    BSc Computer Science - First Class Honours
                  </p>
                  <p className="text-gray-500">
                    Kwame Nkrumah University of Science and Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
