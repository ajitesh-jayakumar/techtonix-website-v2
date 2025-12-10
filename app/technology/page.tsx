import type { Metadata } from "next";
import { Cpu, Battery, Wifi, AlertTriangle, Code, Layers, Zap, Eye, Radio, MapPin, Volume2, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology | The Fenceless Patrol",
  description: "Under the hood of The Fenceless Patrol. Solar power, thermal vision, and AI logic built for impact and scalability.",
};

import Image from "next/image";

export default function Technology() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight">Under the Hood</h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto font-sans">
            Built with accessible hardware for learnability, scalability, and impact.
          </p>
        </div>
      </div>

      <div className="site-container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">
                Built for <span className="text-primary font-bold">Impact & Scalability</span>
              </h2>
              <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
                We chose accessible, modular hardware to ensure the system is easy to build, maintain, and scale. From thermal vision to solar endurance, every component serves a purpose.
              </p>
              <div className="p-6 bg-card border-l-4 border-primary rounded-r-lg">
                 <p className="text-[#00C573] font-normal text-[12px] leading-[18px] font-sans">
                   "Innovation isn't about complexity, it's about effectiveness."
                 </p>
               </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-border group">
               <Image
                src="/assets/yuvafest2.jpg"
                alt="Project Prototype Display"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#FAFAFA] font-normal text-[14px] leading-[21px]">Prototype Display</p>
                <p className="text-primary text-[12px] leading-[18px] font-normal">Yuva Fest 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Power System */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Power System</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Solar Panels (5V)</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Li-Po Battery Backup</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Power Management Module</li>
            </ul>
          </div>

          {/* Vision System */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Eye size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Vision System</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Thermal Camera Module</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Standard Optical Camera</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Image Processing Unit</li>
            </ul>
          </div>

          {/* Control Logic */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Control Logic</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Arduino Uno / Nano</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Micro:bit v2</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Motor Controllers</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Navigation</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• GPS Module (NEO-6M)</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Barometer</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Compass</li>
            </ul>
          </div>

          {/* Deterrence */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Volume2 size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Deterrence</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Ultrasonic Speaker</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Frequency Modulator</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Bio-safe Spray Nozzle</li>
            </ul>
          </div>

          {/* Software */}
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Code size={24} />
            </div>
            <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Software</h3>
            <ul className="space-y-2">
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Arduino IDE (C++)</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• Tinkercad Simulation</li>
              <li className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">• MakeCode Blocks</li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto pt-16">
          <p className="text-[#00C573] font-normal text-[16px] leading-[24px] font-sans italic">
            "We believe that technology should be a bridge between humans and nature, not a barrier."
          </p>
          <p className="text-[#00C573] mt-4 font-normal text-[14px] font-sans">- Team Techtonix</p>
        </div>
      </div>
    </div>
  );
}
