"use client";

export default function Footer() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Subscribed to the newsletter!");
  };

  return (
    <footer className="bg-[#131313] w-full py-12 md:py-20 px-6 md:px-10 border-t-8 border-[#1C1B1B]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl mx-auto font-label text-sm uppercase tracking-widest">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
          <span className="text-3xl sm:text-4xl font-black text-white mb-4 block font-headline italic tracking-tighter">
            MUSCLE LAB
          </span>
          <p className="text-[#C8C6C5] normal-case tracking-normal mb-8 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
            Forging the next generation of athletes through grit, steel, and
            science.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a className="text-[#C8C6C5] hover:text-[#39FF14] transition-all p-2 -ml-2" href="#" aria-label="Social media link">
              <span className="material-symbols-outlined text-2xl">public</span>
            </a>
            <a className="text-[#C8C6C5] hover:text-[#39FF14] transition-all p-2" href="#" aria-label="Video media link">
              <span className="material-symbols-outlined text-2xl">play_circle</span>
            </a>
            <a className="text-[#C8C6C5] hover:text-[#39FF14] transition-all p-2" href="#" aria-label="Community media link">
              <span className="material-symbols-outlined text-2xl">group</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[#39FF14] font-headline font-black mb-6 lg:mb-8 text-lg">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#programs"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#schedule"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#trainers"
              >
                Trainers
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#39FF14] font-headline font-black mb-6 lg:mb-8 text-lg">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#"
              >
                Membership Rules
              </a>
            </li>
            <li>
              <a
                className="text-[#C8C6C5] hover:text-[#39FF14] underline decoration-2 underline-offset-8 transition-all duration-200 block py-1"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 border-t border-white/10 sm:border-0 pt-8 sm:pt-0">
          <h4 className="text-[#39FF14] font-headline font-black mb-6 lg:mb-8 text-lg text-center sm:text-left">
            Newsletter
          </h4>
          <p className="text-[#C8C6C5] normal-case tracking-normal mb-6 text-sm sm:text-base text-center sm:text-left">
            Join the peak list for training tips and exclusive offers.
          </p>
          <form className="flex w-full max-w-sm mx-auto sm:mx-0" onSubmit={handleNewsletter}>
            <input
              className="bg-[#1C1B1B] border-0 text-white p-3 w-full focus:ring-1 focus:ring-[#39FF14] outline-none placeholder:text-white/50"
              placeholder="EMAIL ADDRESS"
              type="email"
              required
            />
            <button type="submit" className="bg-[#39FF14] text-black px-4 neon-glow transition-all active:scale-95" aria-label="Subscribe">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto text-center md:text-left">
        <div className="text-[#C8C6C5] text-xs sm:text-sm font-medium">
          © 2024 MUSCLE LAB. FORGED IN STEEL.<br className="block sm:hidden"/> <span className="hidden sm:inline"> | </span> Built by Pentacore Solution
        </div>
        <div className="text-[#39FF14] font-headline font-bold italic tracking-widest text-[10px] sm:text-xs">
          STRENGTH • DISCIPLINE • POWER
        </div>
      </div>
    </footer>
  );
}
