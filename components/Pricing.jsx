"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Price calculations
  const pricing = {
    basic: isAnnual ? 278 : 29,
    pro: isAnnual ? 566 : 59,
    elite: isAnnual ? 950 : 99,
    period: isAnnual ? "/yr" : "/mo",
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-8 bg-surface overflow-hidden">
      <FadeIn className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black text-white uppercase tracking-tighter mb-6 relative">
            CHOOSE YOUR ARMOR
          </h2>
          <div className="flex justify-center items-center gap-2 sm:gap-4 relative z-10 p-2">
            <span className={`font-bold uppercase tracking-widest text-xs sm:text-sm transition-colors ${!isAnnual ? 'text-white' : 'text-secondary'}`}>
              Monthly
            </span>
            <div
              className="w-14 sm:w-16 h-7 sm:h-8 bg-surface-container-high relative p-1 cursor-pointer rounded-sm"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`absolute left-[2px] top-[2px] sm:left-1 sm:top-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary-container transition-all duration-300 ${isAnnual ? 'translate-x-[28px] sm:translate-x-[32px]' : 'translate-x-0'}`}
              ></div>
            </div>
            <span className={`font-bold uppercase tracking-widest text-xs sm:text-sm transition-colors ${isAnnual ? 'text-white' : 'text-secondary'}`}>
              Annual <span className="text-primary-container hidden sm:inline">(-20%)</span>
              <span className="text-primary-container block sm:hidden text-[10px]">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-[400px] md:max-w-none mx-auto">
          {/* Basic */}
          <div className="bg-surface-container-low p-8 sm:p-12 flex flex-col items-center border-y-4 md:border-y-0 md:border-x-2 border-white/5 transition-transform md:hover:scale-105 md:hover:z-10 w-full rounded-2xl md:rounded-r-none md:rounded-l-2xl">
            <h3 className="font-headline font-black text-white text-2xl sm:text-3xl uppercase mb-6 sm:mb-8">
              Basic
            </h3>
            <div className="flex items-baseline mb-8 sm:mb-12">
              <span className="text-3xl sm:text-4xl font-headline font-black text-white">
                $
              </span>
              <span className="text-6xl sm:text-8xl font-headline font-black text-white leading-none">
                {pricing.basic}
              </span>
              <span className="text-secondary font-bold uppercase text-xs sm:text-sm ml-2">
                {pricing.period}
              </span>
            </div>
            <ul className="w-full space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base">
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Access to gym floor
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Locker room access
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary/30 font-medium">
                <span className="material-symbols-outlined text-xl sm:text-2xl">cancel</span>
                Group classes
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary/30 font-medium">
                <span className="material-symbols-outlined text-xl sm:text-2xl">cancel</span>
                1-on-1 Training
              </li>
            </ul>
            <button onClick={scrollToContact} className="w-full border-4 border-white text-white py-3 sm:py-4 font-headline font-black uppercase text-base sm:text-lg hover:bg-white hover:text-black transition-all active:scale-95">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="bg-surface-bright p-8 sm:p-12 flex flex-col items-center relative transition-transform scale-100 md:scale-110 z-20 shadow-2xl shadow-black/80 w-full rounded-2xl md:rounded-none">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-container rounded-t-2xl md:rounded-none"></div>
            <span className="absolute -top-3 md:-top-4 bg-primary-container text-black px-4 sm:px-6 py-1 font-headline font-black uppercase text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] rounded-sm whitespace-nowrap">
              Most Popular
            </span>
            <h3 className="font-headline font-black text-white text-2xl sm:text-3xl uppercase mb-6 sm:mb-8 pt-4 md:pt-0">
              Pro
            </h3>
            <div className="flex items-baseline mb-8 sm:mb-12">
              <span className="text-3xl sm:text-4xl font-headline font-black text-primary-container">
                $
              </span>
              <span className="text-6xl sm:text-8xl font-headline font-black text-white leading-none">
                {pricing.pro}
              </span>
              <span className="text-secondary font-bold uppercase text-xs sm:text-sm ml-2">
                {pricing.period}
              </span>
            </div>
            <ul className="w-full space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base">
              <li className="flex items-center gap-3 sm:gap-4 text-white font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Everything in Basic
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-white font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Unlimited Group Classes
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-white font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                2 Guest Passes / Mo
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary/30 font-medium">
                <span className="material-symbols-outlined text-xl sm:text-2xl">cancel</span>
                Sauna &amp; Spa
              </li>
            </ul>
            <button onClick={scrollToContact} className="w-full bg-primary-container text-black py-3 sm:py-4 font-headline font-black uppercase text-base sm:text-lg neon-glow transition-all active:scale-95">
              Select Pro
            </button>
          </div>

          {/* Elite */}
          <div className="bg-surface-container-low p-8 sm:p-12 flex flex-col items-center border-y-4 md:border-y-0 md:border-x-2 border-white/5 transition-transform md:hover:scale-105 md:hover:z-10 w-full rounded-2xl md:rounded-l-none md:rounded-r-2xl">
            <h3 className="font-headline font-black text-white text-2xl sm:text-3xl uppercase mb-6 sm:mb-8">
              Elite
            </h3>
            <div className="flex items-baseline mb-8 sm:mb-12">
              <span className="text-3xl sm:text-4xl font-headline font-black text-white">
                $
              </span>
              <span className="text-6xl sm:text-8xl font-headline font-black text-white leading-none">
                {pricing.elite}
              </span>
              <span className="text-secondary font-bold uppercase text-xs sm:text-sm ml-2">
                {pricing.period}
              </span>
            </div>
            <ul className="w-full space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base">
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Unlimited Sauna &amp; Spa
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Weekly 1-on-1 PT Session
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-secondary font-medium">
                <span className="material-symbols-outlined text-primary-container text-xl sm:text-2xl">check_circle</span>
                Nutrition Coaching
              </li>
            </ul>
            <button onClick={scrollToContact} className="w-full border-4 border-white text-white py-3 sm:py-4 font-headline font-black uppercase text-base sm:text-lg hover:bg-white hover:text-black transition-all active:scale-95">
              Go Elite
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
