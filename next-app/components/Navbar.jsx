"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b-4 border-[#39FF14] shadow-2xl shadow-black/50">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6">
        <div className="text-xl sm:text-3xl font-black italic tracking-tighter text-white font-headline">
          MUSCLE LAB
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center font-headline uppercase tracking-tighter font-bold">
          <a className="text-[#39FF14] border-b-2 border-[#39FF14] pb-1" href="#programs">
            Programs
          </a>
          <a className="text-white/70 hover:text-white transition-colors" href="#schedule">
            Schedule
          </a>
          <a className="text-white/70 hover:text-white transition-colors" href="#pricing">
            Plans
          </a>
          <a className="text-white/70 hover:text-white transition-colors" href="#trainers">
            Trainers
          </a>
          <a className="text-white/70 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
          <a href="#pricing" className="bg-[#39FF14] text-black font-headline uppercase tracking-tighter font-bold px-8 py-3 hover:bg-[#39FF14] hover:scale-95 active:scale-90 transition-all duration-300 neon-glow">
            Join Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-white flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 px-6 pb-8 font-headline uppercase tracking-tighter font-bold text-center">
          <a className="text-[#39FF14] py-2 border-b border-white/10" href="#programs" onClick={closeMenu}>
            Programs
          </a>
          <a className="text-white py-2 border-b border-white/10" href="#schedule" onClick={closeMenu}>
            Schedule
          </a>
          <a className="text-white py-2 border-b border-white/10" href="#pricing" onClick={closeMenu}>
            Plans
          </a>
          <a className="text-white py-2 border-b border-white/10" href="#trainers" onClick={closeMenu}>
            Trainers
          </a>
          <a className="text-white py-2 border-b border-white/10" href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="#pricing" onClick={closeMenu} className="bg-[#39FF14] text-black font-headline mt-4 uppercase tracking-tighter font-bold px-8 py-3 w-full neon-glow">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
