import { img } from "motion/react-client";
import React from "react";

function Resume() {
  const stack = [
    "React",
    "tailwind css",
    "Express",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Figma",
    "AWS",
    "MongoDb",
    "MySQL",
  ];
  return (
    <section className="home-gradient">
      <div className="max-w-[1100px]  mx-auto px-4 mt-10">
        <div className="flex gap-6 items-center">
          <h2 className="text-5xl text-white">Portfolio</h2>
          <div
            className="w-full h-0.5 rounded-full"
            style={{ backgroundColor: "oklch(0.63 0.15 255.84)" }}
          ></div>
        </div>

        <div className="flex gap-25 mt-15 text-white">
          <div className="shrink-0">
            <h4 className="text-3xl font-medium">Tech Stack</h4>
            <p className="uppercase text-lg mt-1">Tools and Technologies</p>
          </div>
          <div className="flex gap-8 w-full flex-wrap">
            {stack.map((tech) => (
              <img className="w-12" src={`src/assets/${tech}.svg`} />
            ))}
          </div>
        </div>

        <div className="flex gap-25  text-white mt-20">
          <div className="shrink-0">
            <h4 className="text-3xl font-medium">Work Experience</h4>
            <p className="uppercase text-lg mt-1">Previous & Current roles</p>
          </div>
          <div className="flex flex-col gap-10">
            <div> 
            <div>
              <p>February, 2025 - Present</p>
              <p className="uppercase font-semibold text-lg">
                Software Developer Trainee
              </p>
              <p className="text-gray-500">Developers' In Vogue</p>
            </div>
            <ul className="px-15 pt-3 list-disc flex flex-col gap-5">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>


          <div>
            <div>
              <p>February, 2025 - June, 2025</p>
              <p className="uppercase font-semibold text-lg">
                AWS ReStart Trainee
              </p>
              <p className="text-gray-500">Amalitech Gmb.</p>
            </div>
            <ul className="px-15 pt-3 list-disc flex flex-col gap-5">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div>
            <div>
              <p>November, 2023 - Septemper, 2024</p>
              <p className="uppercase font-semibold text-lg">
                IT Support Technician
              </p>
              <p className="text-gray-500">37 Military Hospital</p>
            </div>
            <ul className="px-15 pt-3 list-disc flex flex-col gap-5">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
          </div>
      </div>
    </section>
  );
}

export default Resume;
