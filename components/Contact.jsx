"use client";
import FadeIn from "./FadeIn";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you soon.");
  };

  return (
    <section id="contact" className="bg-surface-container-lowest">
      <FadeIn className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-6 sm:p-12 lg:p-24 order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-8 sm:mb-12 text-center lg:text-left">
            GET IN TOUCH
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h4 className="font-headline font-black text-primary-container uppercase text-lg sm:text-xl mb-2 sm:mb-4">
                Base Operations
              </h4>
              <p className="text-secondary font-medium text-sm sm:text-base">
                882 Industrial Pkwy
                <br />
                Steel District, NY 10013
              </p>
            </div>
            <div>
              <h4 className="font-headline font-black text-primary-container uppercase text-lg sm:text-xl mb-2 sm:mb-4">
                Comms
              </h4>
              <p className="text-secondary font-medium text-sm sm:text-base">
                Phone: (555) 902-3000
                <br />
                Email: operations@musclelab.fit
              </p>
            </div>
            <div>
              <h4 className="font-headline font-black text-primary-container uppercase text-lg sm:text-xl mb-2 sm:mb-4">
                Mission Hours
              </h4>
              <p className="text-secondary font-medium text-sm sm:text-base">
                Mon-Fri: 05:00 - 00:00
                <br />
                Sat-Sun: 07:00 - 22:00
              </p>
            </div>
            <div>
              <h4 className="font-headline font-black text-primary-container uppercase text-lg sm:text-xl mb-2 sm:mb-4">
                Direct Message
              </h4>
              <p className="text-secondary font-medium flex items-center gap-2 text-sm sm:text-base">
                <span className="material-symbols-outlined text-sm sm:text-base">chat</span>{" "}
                WhatsApp: +1 555-902-3001
              </p>
            </div>
          </div>
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                required
                className="w-full bg-surface-container-low border-0 p-4 sm:p-5 font-headline font-bold text-white focus:ring-2 focus:ring-primary-container outline-none placeholder:text-white/40 text-sm sm:text-base"
                placeholder="YOUR NAME"
                type="text"
              />
              <input
                required
                className="w-full bg-surface-container-low border-0 p-4 sm:p-5 font-headline font-bold text-white focus:ring-2 focus:ring-primary-container outline-none placeholder:text-white/40 text-sm sm:text-base"
                placeholder="EMAIL ADDRESS"
                type="email"
              />
            </div>
            <textarea
              required
              className="w-full bg-surface-container-low border-0 p-4 sm:p-5 font-headline font-bold text-white focus:ring-2 focus:ring-primary-container outline-none placeholder:text-white/40 text-sm sm:text-base"
              placeholder="HOW CAN WE HELP?"
              rows="4"
            ></textarea>
            <button type="submit" className="w-full bg-primary-container text-black py-4 sm:py-5 font-headline font-black uppercase text-lg sm:text-xl neon-glow transition-all active:scale-95">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="lg:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-full bg-surface-container-high relative grayscale order-1 lg:order-2">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="abstract architectural view of industrial building with strong geometric lines and dark metallic textures"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6P51UWOTpy4s3-P8hBsV_6seaGuPsvzv32WIOxkddE40ZbGmNfHaCG-R-3XsdgwaDPi8m3m4ymosfcSuZGjj109xO0xaDlsbKwKu9Ia013t3oxOleNWJda1AhaGpw7qLBP-HMGDjx1_r2cD5rr9zZX8GITpyvmHapEufyjtYJ-s5IeTkfDYT10IL2pEOO3M0o2KptNWi7I_byO90WKFIsRnmViketqPYLjtjYFX7XGOtVIY1Cnpis3inFprDYHTCIcIMjRGqcjfxw"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-primary-container p-6 sm:p-8 shadow-2xl max-w-full text-center">
              <div className="text-black font-headline font-black text-2xl sm:text-3xl italic tracking-tighter">
                MUSCLE LAB HQ
              </div>
              <div className="text-black/70 font-bold uppercase text-[10px] sm:text-xs mt-1 sm:mt-2 tracking-widest">
                Established 2024
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
