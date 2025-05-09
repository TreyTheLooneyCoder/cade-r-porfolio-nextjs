import React from "react";

const SkillsComponent: React.FC = () => {
  return (
    <div id="skills" className="my-8 text-center">
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        🧰 Skill Set
      </h2>
      <div className="bg-gradient-to-br from-[#1b1f32] to-[#2a0a3c] border-2 border-purple-800 rounded-xl p-6 shadow-[0_0_30px_#8b5cf655] max-w-4xl mx-auto text-left">
        <ul className="list-disc list-inside text-purple-100 space-y-3 text-lg">
          <li>
            <span className="text-purple-300 font-semibold">Languages:</span> C#, JavaScript, HTML, CSS, TypeScript, Lua, C++
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Engines:</span> Unity, Roblox Studio
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Tools:</span> GitHub, React.js, React.ts, Next.js, Android Studio, Bootstrap, Tailwind, VS Code Studio, ShadCN
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsComponent;