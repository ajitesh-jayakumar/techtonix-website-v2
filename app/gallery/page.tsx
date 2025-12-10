'use client';

import { useState } from 'react';
import Image from "next/image";
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight">Project Gallery</h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto font-sans">
            Highlights from YUVAFEST 2025 and our project development journey.
          </p>
        </div>
      </div>

      <div className="site-container px-4 py-16">
        {/* Press Mention */}
        <div className="mb-20">
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-8 border-l-4 border-primary pl-4 font-sans">In The News</h2>
          <div 
            className="max-w-md mx-auto hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage({src: '/assets/TOI.jpeg', alt: 'Featured in Times of India'})}
          >
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl border border-border group">
              <Image
                src="/assets/TOI.jpeg"
                alt="Featured in Times of India"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-card p-4">
                <p className="text-foreground font-medium text-sm">Featured in Times of India, Dec 3rd 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glimpse of Yuva Fest 2025 */}
        <div>
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-8 border-l-4 border-primary pl-4 font-sans">Glimpse of Yuva Fest 2025</h2>
          
          <div className="space-y-12">
            {/* Video */}
            {/* <div className="aspect-video w-full max-w-5xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-border relative group">
              <video 
                controls 
                preload="auto"
                className="w-full h-full object-contain"
                poster="/assets/yuvafest1.jpg"
              >
                <source src="/assets/yuvafest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}

            {/* Images Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl border border-border group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage({src: '/assets/yuvafest1.jpg', alt: 'Team Techtonix at YUVAFEST 2025'})}
              >
                <Image
                  src="/assets/yuvafest1.jpg"
                  alt="Team Techtonix at YUVAFEST 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-card p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-medium text-sm">YUVAFEST 2025 Presentation</p>
                </div>
              </div>
              <div 
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl border border-border group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage({src: '/assets/yuvafest2.jpg', alt: 'Project Prototype Display'})}
              >
                <Image
                  src="/assets/yuvafest2.jpg"
                  alt="Project Display"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-card p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-medium text-sm">Project Prototype Display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div 
            className="relative w-full max-w-7xl h-[85vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xl font-medium tracking-wide">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
