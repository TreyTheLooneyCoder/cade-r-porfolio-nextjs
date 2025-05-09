import React from "react";

type Project = {
  title: string;
  description: string;
  tools: string[];
  link: string;
};

const MyProjectsComponent: React.FC = () => {
  const projects: Project[] = [
    {
      title: "MatchPoint - backend",
      description: "A group project to create an app for people to find and review tennis courts in their area. We have 3 members on our team for this project, I'm the main backend guy. My main task has been structuring and sometimes resturcturing the data flow making sure we have working routes, models, and services for my other teamates use on the frontend.",
      tools: ["C#(C-Sharp)", "Github"],
      link: "https://matchpoint-three.vercel.app/"
    }, 

    {
        title: "Shinzui Gezoku: Rebirth",
        description: "A closed community player-driven lore based PD(Permadeath) Naruto Shippuden game on Roblox where you load in choose a first name and are given a clan in one of the five great nations, Leaf, Sand, Cloud, Mist, Stone. You then do small quest and partake in lore events created by me and my lore team, such as global PDs(sandbox, lore, tailed beast hunt, village war, jounin and chunin exams) to progress their character in various ways. I have recently taken over the development of this game and Revamped most of the scripts, Lots of renaming things and disabling broken scripts then trying to understand the last team of devs logic and code to implement my own code as well. Join the linked Roblox community and get 'Tester' role to play.",
        tools: ["Roblox Studio plugins", "Lua", "C++"],
        link: "https://www.roblox.com/communities/8364178/Shinzui-Genzoku-The-True-Origin-Clan#!/about"
    }
];

return (
    <div id="projects" className="my-8">
      <h2 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-800">
        🎮 Projects Arena
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#1f1f2e] to-[#0d0d16] border-2 border-green-700 rounded-xl overflow-hidden shadow-[0_0_30px_#00ff8855] hover:scale-105 transition-transform duration-300 group"
          >
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-green-300 mb-2 tracking-wide group-hover:text-green-400 transition">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-3 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                {proj.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-green-500 to-green-700 px-3 py-1 rounded-full shadow-md font-mono tracking-wide"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm font-bold text-cyan-300 hover:text-cyan-200 transition"
              >
                🚀 View Project
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500 to-green-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjectsComponent;


