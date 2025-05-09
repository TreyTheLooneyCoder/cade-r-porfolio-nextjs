import React from "react";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between sticky top-0 z-50">
      <div className="font-bold text-xl">My Portfolio</div>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default NavbarComponent;