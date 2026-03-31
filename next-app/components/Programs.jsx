"use client";
import FadeIn from "./FadeIn";

export default function Programs() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 md:py-32 px-4 sm:px-8 bg-surface">
      <FadeIn className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-primary-container text-xs sm:text-sm md:text-base font-headline font-bold tracking-[0.2em] uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter">
              ELITE TRAINING PROGRAMS
            </h2>
          </div>
          <div className="h-1 w-24 sm:w-32 bg-primary-container hidden md:block mb-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">fitness_center</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Advanced</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">Weight Training</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">Heavy-duty powerlifting and bodybuilding circuits focusing on raw strength and muscle hypertrophy.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">bolt</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Intermediate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">HIIT</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">High-intensity explosive movements designed to maximize caloric burn and cardiovascular endurance.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">settings_input_component</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Advanced</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">CrossFit</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">Functional movements performed at high intensity to build all-around athletic performance.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">sports_mma</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Beginner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">Boxing</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">Traditional striking techniques and heavy bag work combined with intense combat conditioning.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">self_improvement</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Beginner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">Yoga</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">Dynamic flow and restorative poses to improve mobility, focus, and muscular recovery.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-surface-container-highest p-8 sm:p-10 border-l-4 border-primary-container group hover:bg-surface-bright transition-all duration-300 rounded-lg sm:rounded-none">
            <div className="mb-6 sm:mb-8 flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl">directions_run</span>
              <span className="bg-white/10 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-widest rounded-sm">Intermediate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-black text-white uppercase mb-3 sm:mb-4">Spin</h3>
            <p className="text-secondary text-sm sm:text-base font-medium mb-6 sm:mb-8">Rhythm-based cycling classes that challenge your stamina in a high-energy auditory environment.</p>
            <a href="#pricing" onClick={scrollToPricing} className="text-primary-container font-headline font-bold uppercase tracking-widest text-[10px] sm:text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Program <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
