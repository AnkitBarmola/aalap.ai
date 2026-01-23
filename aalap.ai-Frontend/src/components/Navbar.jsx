import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide text-white">
          aalap<span className="text-indigo-400">.ai</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {["Discover", "Moods", "How it works"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="text-sm px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition">
            Start Listening
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

