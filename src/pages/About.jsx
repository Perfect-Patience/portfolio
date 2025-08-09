import React from "react";
import { UserCheck } from "../assets/icons";

function About() {
 
  return (
    <section id="about"
      className=" pb-15"
      style={{ backgroundColor: "oklch(0.25 0.1 282.21)" }}
    >
      <div className="max-w-[1200px]  mx-auto px-4 pt-20">
        <div className="flex gap-6 items-center">
          <h2 className="text-5xl text-white">About</h2>
          <div
            className="w-full h-0.5 rounded-full"
            style={{ backgroundColor: "oklch(0.63 0.15 255.84)" }}
          ></div>
        </div>
        <div className="flex">
          <div className="picture"></div>
          <div className=" text-white mt-10">
            <h4
              className="text-2xl font-semibold "
              style={{ color: "rgb(100, 255, 218)" }}
            >
              Who I am
            </h4>
            <ul className="flex flex-col gap-5 mt-5 lg:pl-20 text-lg lg:w-[80%]">
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>
                  {" "}
                  I am a software developer focused on building user-centered
                  products accross different sectors{" "}
                </p>
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>
                  I create applications that are easy to use, responsive and
                  user-centered.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>I work on both front and back end of applications.</p>
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>
                  I'm skiiled in core programming and computer science concepts
                  , using them to deliver software that's reliable and
                  impactful.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>I hold a First Class Honours degree in Computer Science.</p>
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <UserCheck className="shrink-0 grow-0" />{" "}
                <p>
                  I am currently honing my coding skills with{" "}
                  <a>Developer's In Vouge</a>
                </p>
              </li>
            </ul>

            <div className="text-white mt-10">
              <h4
                className="text-2xl font-semibold "
                style={{ color: "rgb(100, 255, 218)" }}
              >
                What I do
              </h4>
              <div className="flex justify-around gap-y-4 items-center flex-wrap mt-10">
                <div
                  className="border px-2 py-6 rounded-2xl w-[180px] h-[165px]"
                  style={{ borderColor: "oklch(0.63 0.15 255.84" }}
                >
                  <img
                    src="src/assets/tag.png"
                    alt=""
                    className="mx-auto mb-3"
                  />
                  <p className="text-center">Frontend Web Development</p>
                </div>
                <div
                  className=" w-[180px] border  py-6 rounded-2xl h-[165px]"
                  style={{ borderColor: "oklch(0.63 0.15 255.84" }}
                >
                  <img
                    src="src/assets/brackets.png"
                    alt=""
                    className="mx-auto mb-3"
                  />
                  <p className="text-center">Backend Web Development</p>
                </div>
                <div
                  className=" w-[180px] border  py-6 rounded-2xl h-[165px]"
                  style={{ borderColor: "oklch(0.63 0.15 255.84" }}
                >
                  <img
                    src="src/assets/globe.png"
                    alt=""
                    className="mx-auto mb-3"
                  />
                  <p className="text-center">Full-Stack Web Development</p>
                </div>
                <div
                  className=" w-[180px] border py-6 rounded-2xl h-[165px]"
                  style={{ borderColor: "oklch(0.63 0.15 255.84" }}
                >
                  <img
                    src="src/assets/mobile.png"
                    alt=""
                    className="mx-auto mb-3"
                  />
                  <p className="text-center">Mobile App Development(Flutter)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default About;
