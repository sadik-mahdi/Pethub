import React from 'react';

export default function Banner() {
  return (
    <div 
      className="relative min-h-130 md:min-h-160 w-full flex flex-col justify-center bg-cover bg-center text-white font-sans overflow-hidden"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/35 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl p-8 sm:max-w-sm md:p-12 md:max-w-xl shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 uppercase">
            Give a loving <br />
            home to a <br />
            <span className="text-orange-400">friend in need.</span>
          </h1>
          
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 font-light">
            Meet hundreds of wonderful dogs and cats eagerly waiting for a second chance. 
            Experience the unconditional love and joy of adoption today.
          </p>

          <button className="group relative inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 transform active:scale-95 transition-all text-lg tracking-wide">
            ADOPT NOW
          </button>
        </div>
        <div className="hidden lg:block" />
      </div>

    </div>
  );
}