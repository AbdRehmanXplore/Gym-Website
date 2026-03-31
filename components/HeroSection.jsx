"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (heroImgRef.current && scrollPosition < window.innerHeight) {
        heroImgRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-[100svh] flex items-center justify-center overflow-hidden diagonal-cut-bottom">
      <div className="absolute inset-0 z-0 bg-background">
        <img
          ref={heroImgRef}
          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
          alt="atmospheric dark gym interior"
          src="/assets/hero_bg.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-4 w-full max-w-5xl pt-24 sm:pt-32 md:pt-40">
        <span className="text-primary-container text-xs sm:text-sm md:text-base font-headline font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 block">
          Forged in Steel
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black italic text-white leading-tight sm:leading-none uppercase tracking-tighter mb-6 sm:mb-8">
          FORGE YOUR <br className="hidden sm:block" />
          <span className="text-primary-container">LIMITS</span>
        </h1>
        <p className="text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 font-medium px-2">
          Break through physical and mental barriers in a high-octane industrial
          environment designed for the elite athlete.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 w-full max-w-[400px] sm:max-w-none mx-auto">
          <button onClick={() => scrollToSection('#pricing')} className="w-full sm:w-auto bg-primary-container text-black px-8 sm:px-12 py-4 sm:py-5 font-headline font-black uppercase text-lg sm:text-xl neon-glow transition-all active:scale-95">
            Join Now
          </button>
          <button onClick={() => scrollToSection('#pricing')} className="w-full sm:w-auto border-4 border-white text-white px-8 sm:px-12 py-4 sm:py-5 font-headline font-black uppercase text-lg sm:text-xl hover:bg-white hover:text-black transition-all active:scale-95">
            View Plans
          </button>
        </div>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t-2 border-white/10 mx-[-1rem] sm:mx-0 px-4 sm:px-0">
          <div>
            <div className="text-4xl sm:text-5xl font-headline font-black text-white">5,000+</div>
            <div className="text-primary-container font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mt-2">Members</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-headline font-black text-white">50+</div>
            <div className="text-primary-container font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mt-2">Trainers</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-headline font-black text-white">200+</div>
            <div className="text-primary-container font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mt-2">Equipment</div>
          </div>
        </div>
      </div>
    </header>
  );
}
