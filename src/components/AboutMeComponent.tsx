import React from "react";

const AboutMeComponent: React.FC = () => {
  return (
    <div id="about" className="my-8 text-center">
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
        🧠 About Me
      </h2>
      <div className="bg-gradient-to-br from-[#1b1f32] to-[#0e1222] border-2 border-blue-700 rounded-xl p-6 shadow-[0_0_30px_#00ccff55] max-w-4xl mx-auto text-left">
        <p className="text-lg text-blue-100 mb-4">
          I love deep and intricately weaved storytelling. I've been a gamer nearly my whole life, and novels have always been another of my great passions. Game development always felt like the natural carrer choice, but I never thought I&apos;d get the opportunity to code professionally.
        </p>
        <p className="text-blue-100 mb-4">
          After 9 months at CodeStack Academy, I&apos;ve developed a strong foundation in web development, design, and several programming languages. More importantly, I&apos;ve been taught how to learn to adapt quickly to new tools and code, and how to think like a developer.
        </p>
        <p className="text-blue-100 mb-4">
          I often understand code better through gameplay analogies, mapping methods and logic to mechanics and systems. This mindset helps me quickly conceptualize the code structure and how to implement it elsewhere later.
        </p>
        <p className="text-blue-300">
        I&apos;m currently working on projects that combine my love for worldbuilding with programming—developing lore-rich narratives, exploring C# game logic, and scripting dynamic gameplay systems in Lua. My goal is to build unforgettable game worlds filled with meaning, mystery, and interactivity based off of stories I create.
        </p>
      </div>
    </div>
  );
};

export default AboutMeComponent;