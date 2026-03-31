"use client";
import { useState } from "react";

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('Mon');

  const scheduleData = [
    { day: 'Mon', classes: [{ time: '08:00', name: 'HIIT Core', trainer: 'S. Miller', type: 'primary' }] },
    { day: 'Tue', classes: [{ time: '10:00', name: 'Power Lift', trainer: 'D. Wolf', type: 'highest' }] },
    { day: 'Wed', classes: [{ time: '08:00', name: 'HIIT Core', trainer: 'S. Miller', type: 'primary' }] },
    { day: 'Thu', classes: [{ time: '10:00', name: 'Power Lift', trainer: 'D. Wolf', type: 'highest' }] },
    { day: 'Fri', classes: [{ time: '08:00', name: 'HIIT Core', trainer: 'S. Miller', type: 'primary' }, { time: '10:00', name: 'Yoga Flow', trainer: 'A. Chen', type: 'highest' }] },
    { day: 'Sat', classes: [{ time: '10:00', name: 'Yoga Flow', trainer: 'A. Chen', type: 'highest' }] },
    { day: 'Sun', classes: [] },
  ];

  const activeDayClasses = scheduleData.find(d => d.day === activeTab)?.classes || [];

  return (
    <section id="schedule" className="py-20 lg:py-32 bg-surface-container-low max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 fade-in-up visible">
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6 lg:mb-4">
            WEEKLY SCHEDULE
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-4 lg:mb-12">
            <button className="bg-primary-container text-black px-4 sm:px-6 py-2 font-headline font-bold uppercase text-xs sm:text-sm">
              Main Studio
            </button>
            <button className="bg-surface-container-highest text-white px-4 sm:px-6 py-2 font-headline font-bold uppercase text-xs sm:text-sm border-2 border-white/5">
              The Ring
            </button>
            <button className="bg-surface-container-highest text-white px-4 sm:px-6 py-2 font-headline font-bold uppercase text-xs sm:text-sm border-2 border-white/5">
              Zen Zone
            </button>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden w-full">
          {/* Day Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-4 hide-scrollbar">
            {scheduleData.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveTab(d.day)}
                className={`flex-shrink-0 px-6 py-3 font-headline font-black uppercase text-sm ${activeTab === d.day ? 'bg-primary-container text-black' : 'bg-surface-container-highest text-white border-2 border-white/5'}`}
              >
                {d.day}
              </button>
            ))}
          </div>
          {/* Active Classes List */}
          <div className="flex flex-col gap-4">
            {activeDayClasses.length > 0 ? (
              activeDayClasses.map((cls, idx) => (
                <div key={idx} className={`p-6 flex items-center justify-between ${cls.type === 'primary' ? 'bg-primary-container text-black' : 'bg-surface-container-highest text-white border-l-4 border-primary-container'}`}>
                  <div>
                    <div className="font-headline font-black text-xl uppercase mb-1">{cls.name}</div>
                    <div className="text-xs uppercase font-bold tracking-widest opacity-80">{cls.trainer}</div>
                  </div>
                  <div className="font-headline font-black text-2xl">{cls.time}</div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-secondary font-headline uppercase font-bold border-2 border-dashed border-white/10">
                No classes scheduled
              </div>
            )}
          </div>
        </div>

        {/* Desktop View (Unchanged from before but hidden on small screens) */}
        <div className="hidden lg:block w-full overflow-hidden">
          <div className="min-w-[1000px] grid grid-cols-8 gap-1 bg-surface-container-highest p-1">
            {/* Header */}
            <div className="bg-surface-container-lowest p-6 flex items-center justify-center">
              <span className="font-headline font-bold text-secondary uppercase text-xs tracking-widest">
                Time
              </span>
            </div>
            {scheduleData.map(d => (
               <div key={`header-${d.day}`} className="bg-surface-container-low p-6 text-center font-headline font-black text-white uppercase">
                 {d.day}
               </div>
            ))}
            {/* Row 08:00 */}
            <div className="bg-surface-container-lowest p-4 flex items-center justify-center font-headline font-bold text-white">
              08:00
            </div>
            <div className="bg-primary-container p-4 text-black relative">
              <div className="font-headline font-black text-sm uppercase leading-tight">HIIT Core</div>
              <div className="text-[10px] uppercase font-bold mt-1">S. Miller • 45m</div>
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-primary-container p-4 text-black relative">
              <div className="font-headline font-black text-sm uppercase leading-tight">HIIT Core</div>
              <div className="text-[10px] uppercase font-bold mt-1">S. Miller • 45m</div>
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-primary-container p-4 text-black relative">
              <div className="font-headline font-black text-sm uppercase leading-tight">HIIT Core</div>
              <div className="text-[10px] uppercase font-bold mt-1">S. Miller • 45m</div>
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-surface-container-low p-4"></div>
            {/* Row 10:00 */}
            <div className="bg-surface-container-lowest p-4 flex items-center justify-center font-headline font-bold text-white">
              10:00
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-surface-container-highest p-4 text-white">
              <div className="font-headline font-black text-sm uppercase leading-tight">Power Lift</div>
              <div className="text-[10px] uppercase font-bold mt-1 text-primary-container">D. Wolf • 60m</div>
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-surface-container-highest p-4 text-white">
              <div className="font-headline font-black text-sm uppercase leading-tight">Power Lift</div>
              <div className="text-[10px] uppercase font-bold mt-1 text-primary-container">D. Wolf • 60m</div>
            </div>
            <div className="bg-surface-container-low p-4"></div>
            <div className="bg-surface-container-highest p-4 text-white">
              <div className="font-headline font-black text-sm uppercase leading-tight">Yoga Flow</div>
              <div className="text-[10px] uppercase font-bold mt-1 text-primary-container">A. Chen • 75m</div>
            </div>
            <div className="bg-surface-container-highest p-4 text-white">
              <div className="font-headline font-black text-sm uppercase leading-tight">Yoga Flow</div>
              <div className="text-[10px] uppercase font-bold mt-1 text-primary-container">A. Chen • 75m</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
