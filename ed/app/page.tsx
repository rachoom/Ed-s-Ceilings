'use client';

import React from 'react';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

export default function LuxuryCeilingSite() {
  // Replace this with your actual WhatsApp number
  const whatsappNumber = "27697026088"; 
  const message = encodeURIComponent("Hello Ed, I saw your website and I am interested in a luxury ceiling consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 w-full max-w-5xl px-4">
          <div className="backdrop-blur-2xl bg-black/30 border border-white/10 py-24 md:py-40 px-8 md:px-20 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-8xl font-light tracking-tighter mb-6 uppercase">
              ED'S LUXURY <br />
              <span className="text-[#C5A059] italic font-normal">CUSTOM CEILINGS</span>
            </h1>
            <div className="h-px w-32 bg-[#C5A059] mb-10 opacity-60" />
            <p className="text-sm md:text-xl text-white/90 font-light tracking-[0.4em] uppercase mb-12 max-w-2xl">
              Bespoke Luxury Ceilings & Artisan Walls
            </p>
            {/* WHATSAPP REDIRECT */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-[#C5A059] text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 rounded-full text-xs shadow-lg shadow-black/50"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="text-white/30" />
        </div>
      </section>

      {/* 2. THE ARTISAN */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-8 border-l-4 border-[#C5A059] pl-6">
            One Vision. <br /> One Master.
          </h2>
          <p className="text-white/70 leading-relaxed mb-6 text-lg">
            I specialize in the "fifth wall," turning standard interiors into structural masterpieces.
          </p>
          <p className="text-white/50 leading-relaxed font-light">
            From the first measurement to the final trowel stroke, you work directly with the artisan. I provide a level of personal accountability and detail that large firms simply cannot replicate.
          </p>
        </div>
        <div className="relative aspect-[4/5] border border-white/10 overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img 
            src="/profile.png" 
            alt="Artisan" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 relative z-0" 
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x500?text=Profile"; }}
          />
        </div>
      </section>

      {/* 3. THE MASTERPIECE GALLERY */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs tracking-[0.6em] uppercase text-[#C5A059] mb-16 opacity-70 font-bold text-center">Masterpiece Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 5].map((num) => (
              <div key={num} className="aspect-[4/5] overflow-hidden border border-white/5 bg-white/5 group relative shadow-2xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700 z-10" />
                <img 
                  src={`/project${num}.png`} 
                  alt={`Project ${num}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 relative z-0"
                  onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/400?text=Project+${num}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT */}
      <section id="contact" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#C5A059]/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-light uppercase tracking-widest mb-16 text-[#C5A059]">Begin Your Transformation</h2>
          <form className="grid gap-10 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
               <label className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-2 block">Full Name</label>
               <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#C5A059] outline-none transition-all uppercase tracking-widest text-sm" />
            </div>
            <div className="group">
               <label className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-2 block">Email Address</label>
               <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#C5A059] outline-none transition-all uppercase tracking-widest text-sm" />
            </div>
            <div className="group">
               <label className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-2 block">Project Details</label>
               <textarea rows={3} className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#C5A059] outline-none transition-all uppercase tracking-widest text-sm" />
            </div>
            <button type="submit" className="mt-10 py-5 bg-[#C5A059] text-black hover:bg-white transition-all duration-500 uppercase tracking-[0.4em] font-bold text-xs">
              Request Design Consultation
            </button>
          </form>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-white/30 text-[10px] tracking-[0.3em] uppercase">
            <a href={`tel:${whatsappNumber}`} className="flex flex-col items-center gap-3 hover:text-[#C5A059] transition-colors"><Phone size={14} /> +{whatsappNumber}</a>
            <div className="flex flex-col items-center gap-3 text-center"><MapPin size={14} /> EAST RAND & GAUTENG</div>
            <a href="mailto:contact@edsluxury.co.za" className="flex flex-col items-center gap-3 hover:text-[#C5A059] transition-colors"><Mail size={14} /> [EMAIL]</a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 opacity-40">
        <p className="text-[9px] tracking-[0.5em] uppercase">
          An Artisan Directory Project | Skills Connect Pro
        </p>
      </footer>
    </div>
  );
}
