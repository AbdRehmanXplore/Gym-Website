"use client";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-12 sm:mb-20 text-center md:text-left">
          MEMBER STORIES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-lg md:max-w-none mx-auto">
          {/* Testimonial 1 */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 bg-surface-container-low p-8 sm:p-10 relative rounded-xl">
            <div className="absolute top-0 right-0 p-4 hidden sm:block">
              <span className="text-6xl font-headline font-black text-white/5">
                "
              </span>
            </div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 mx-auto sm:mx-0">
              <img
                className="w-full h-full object-cover rounded-full sm:rounded-none"
                alt="close-up headshot of a man"
                src="/assets/member_1.png"
              />
            </div>
            
            <div className="text-center sm:text-left">
              <div className="flex gap-1 mb-4 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-white italic text-base sm:text-lg mb-6 max-w-sm">
                "Muscle Lab isn't just a gym, it's a brotherhood. The atmosphere
                here pushes you past what you thought was possible. Lost 30lbs
                and gained a whole new mindset."
              </p>
              <div className="font-headline font-black text-white uppercase flex flex-col sm:flex-row items-center sm:items-baseline sm:gap-2">
                James R.{" "}
                <span className="text-secondary font-bold text-[10px] sm:text-xs mt-1 sm:mt-0">
                  Elite Member • 2 Years
                </span>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 bg-surface-container-low p-8 sm:p-10 relative rounded-xl">
            <div className="absolute top-0 right-0 p-4 hidden sm:block">
              <span className="text-6xl font-headline font-black text-white/5">
                "
              </span>
            </div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 mx-auto sm:mx-0">
              <img
                className="w-full h-full object-cover rounded-full sm:rounded-none"
                alt="portrait of an athletic woman"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5ad2UQmOBftRefBadRXYgXHupfvynt-_COYqvtAa2Nq-55L9WZaTzOBld7oe4c6E03IF_rALZgC2dEn-LwBVWuBGwQCt_1c7K1jqYKsvDH4ItoHwdjAyNHElDpwyYcqMe9Jdh_8Z-Q2__tIj29LEhfQEnQZu-0uGliSDyHi5Q6PVa4jaga9Ca-RcArnCcwhIINL6EtCJjEZHazHXgI9LKKOCxleCbP8yAY8FQKyqPn5Fly9Gw7DxA1D30fffZJM6tSb2dGeNcEq6"
              />
            </div>
            
            <div className="text-center sm:text-left">
              <div className="flex gap-1 mb-4 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-white italic text-base sm:text-lg mb-6 max-w-sm">
                "The trainers here are the real deal. No fluff, just results.
                The HIIT classes are brutal but so rewarding. Best facility I've
                ever stepped foot in."
              </p>
              <div className="font-headline font-black text-white uppercase flex flex-col sm:flex-row items-center sm:items-baseline sm:gap-2">
                Sarah K.{" "}
                <span className="text-secondary font-bold text-[10px] sm:text-xs mt-1 sm:mt-0">
                  Pro Member • 8 Months
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </FadeIn>
    </section>
  );
}
