import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden bg-black">
    
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop" // আপনার ইমেজের পাথ দিন
          alt="AI Art Background"
          fill
          priority
          className="object-cover object-center"
        />
      
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent z-10"></div>
      </div>

  
      <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
        
        
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 transform scale-90 md:scale-100">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></span>
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Nex-Gen AI Art Engine</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-none tracking-tighter mb-6 max-w-4xl uppercase">
          Turn Ideas <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Into Stunning</span> <br />
          AI Art
        </h1>

   
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
          We are committed to providing quality service and essential information. <br className="hidden md:block" />
          <span className="font-semibold text-white">Stay connected with us.</span>
        </p>

      
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20">
            Generate Now
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            View Pricing
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;