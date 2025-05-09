import React from "react";

const ContactsComponent: React.FC = () => {
  return (
    <footer id="contact" className="w-full mt-auto bg-gradient-to-br from-[#1a0005] to-[#0e0003] border-t-2 border-red-800 text-center py-2 shadow-[0_0_30px_#ff003355]">
      <h2 className="text-xl font-extrabold mb-4 pr-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
        📡 Contact
      </h2>
      <p className="text-red-100 mb-2 text-sm">
        <strong>Phone:</strong> (209) 390-3028
        </p>
      <p className="text-red-100 mb-2 text-sm">
        <strong>Email:</strong> roytreslll@gmail.com
        </p>
      <div className="mt-4 space-x-6">
        <a
          href="https://github.com/TreyTheLooneyCoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/roy-cade-iii-4862572a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 font-semibold"
        >
          LinkedIn
        </a>
        
      </div>
    </footer>
  );
};

export default ContactsComponent;