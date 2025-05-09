import React from "react";
import AboutMeComponent from "../components/AboutMeComponent";
import MyProjectsComponent from "../components/MyProjectsComponent";
import SkillsComponent from "../components/SkillsComponent";
import ContactsComponent from "../components/ContactsComponent";
import NavbarComponent from "../components/NavbarComponent";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans">
      <NavbarComponent />
      <main className="p-4 max-w-5xl mx-auto space-y-20">
        <AboutMeComponent />
        <MyProjectsComponent />
        <SkillsComponent />
      </main>
      <ContactsComponent />
    </div>
  );
};

export default Home;