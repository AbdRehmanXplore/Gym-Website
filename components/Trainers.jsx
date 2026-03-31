"use client";
import FadeIn from "./FadeIn";

export default function Trainers() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="trainers" className="py-20 md:py-32 px-4 sm:px-8 bg-surface-container-lowest md:diagonal-cut-top relative z-10">
      <FadeIn className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-12 sm:mb-20 text-center">
          THE ARCHITECTS OF POWER
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
          {/* Trainer Card */}
          <div className="bg-surface-container-low group rounded-xl md:rounded-none overflow-hidden sm:overflow-visible">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:group-hover:scale-110"
                alt="trainer"
                src="/assets/trainer_1.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h4 className="text-xl sm:text-2xl font-headline font-black text-white uppercase">Dorian Wolf</h4>
                <p className="text-primary-container font-headline font-bold uppercase text-[10px] sm:text-xs tracking-widest">Strength Lead</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-container-low">
              <div className="text-[10px] sm:text-xs text-secondary font-medium mb-4 uppercase tracking-tighter">CSCS • 12+ Years Exp.</div>
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-primary-container text-primary-container font-headline font-black uppercase text-xs sm:text-sm hover:bg-primary-container hover:text-black transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-low group rounded-xl md:rounded-none overflow-hidden sm:overflow-visible">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:group-hover:scale-110"
                alt="trainer"
                src="/assets/trainer_2.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h4 className="text-xl sm:text-2xl font-headline font-black text-white uppercase">Sarah Miller</h4>
                <p className="text-primary-container font-headline font-bold uppercase text-[10px] sm:text-xs tracking-widest">HIIT Specialist</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-container-low">
              <div className="text-[10px] sm:text-xs text-secondary font-medium mb-4 uppercase tracking-tighter">NASM-CPT • 8+ Years Exp.</div>
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-primary-container text-primary-container font-headline font-black uppercase text-xs sm:text-sm hover:bg-primary-container hover:text-black transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-low group rounded-xl md:rounded-none overflow-hidden sm:overflow-visible">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:group-hover:scale-110"
                alt="trainer"
                src="/assets/trainer_3.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h4 className="text-xl sm:text-2xl font-headline font-black text-white uppercase">Marcus Thorne</h4>
                <p className="text-primary-container font-headline font-bold uppercase text-[10px] sm:text-xs tracking-widest">Combat Expert</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-container-low">
              <div className="text-[10px] sm:text-xs text-secondary font-medium mb-4 uppercase tracking-tighter">WBC Pro • 15+ Years Exp.</div>
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-primary-container text-primary-container font-headline font-black uppercase text-xs sm:text-sm hover:bg-primary-container hover:text-black transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-low group rounded-xl md:rounded-none overflow-hidden sm:overflow-visible">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:group-hover:scale-110"
                alt="trainer"
                src="/assets/trainer_4.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h4 className="text-xl sm:text-2xl font-headline font-black text-white uppercase">Elena Vance</h4>
                <p className="text-primary-container font-headline font-bold uppercase text-[10px] sm:text-xs tracking-widest">Mobility Lead</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-container-low">
              <div className="text-[10px] sm:text-xs text-secondary font-medium mb-4 uppercase tracking-tighter">RYT-500 • 10+ Years Exp.</div>
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-primary-container text-primary-container font-headline font-black uppercase text-xs sm:text-sm hover:bg-primary-container hover:text-black transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </div>
          
        </div>
      </FadeIn>
    </section>
  );
}
