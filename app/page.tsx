import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center text-white overflow-hidden border-b border-white/10 pt-20 md:pt-0">
        <div className="absolute inset-0 z-0 bg-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
          >
            <source src="/assets/forest_scan_optimized.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 px-4 site-container w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-left">
              <div className="inline-block mb-4 px-4 py-1 bg-card border border-border rounded-full text-primary text-xs font-medium animate-fade-in">
                Team Techtonix • Innovating for Nature
              </div>
              <h1 className="text-[63px] leading-[63px] font-normal mb-6 tracking-tight drop-shadow-xl">
                <span className="text-[#FAFAFA] block mb-2">Before They Knock,</span>
                <span className="text-primary font-bold">The Patrol Begins.</span>
              </h1>
              <p className="text-[16px] leading-[25px] font-normal mb-10 text-[#FAFAFA] max-w-xl">
                An autonomous, solar-powered drone system designed to reduce human-wildlife conflict in a humane, intelligent way.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="/solution" 
                  className="bg-primary hover:opacity-90 text-foreground px-8 h-[2.714rem] rounded-lg font-bold text-[1rem] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Explore the Innovation <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/team" 
                  className="glass-card hover:border-foreground/20 text-foreground px-8 h-[2.714rem] rounded-lg font-bold text-[1rem] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Meet the Innovators
                </Link>
              </div>
            </div>

            {/* Right Column: Drone Image */}
            <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center animate-fade-in-delayed">
              <div className="animate-float w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/drone.png"
                  alt="Autonomous Patrol Drone"
                  width={600}
                  height={600}
                  className="object-contain animate-glow-pulse"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="py-20 px-4 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 pointer-events-none">
        </div>
        <div className="site-container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">
                The Invisible Crisis at the <span className="text-primary font-bold">Forest Edge</span>
              </h2>
              <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
                As human habitats expand, the buffer zone shrinks. Traditional electric fences are cruel and ineffective. Animals are injured, farmers lose their livelihoods, and rangers are stretched thin.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border p-4 rounded-xl">
                  <h4 className="font-bold text-[#FAFAFA] mb-1">Dangerous Barriers</h4>
                  <p className="text-sm text-[#b9b9b9]">Electric fences cause severe injuries to endangered species.</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-xl">
                  <h4 className="font-bold text-[#FAFAFA] mb-1">Blind Spots</h4>
                  <p className="text-sm text-[#b9b9b9]">Rangers cannot patrol miles of dense forest border simultaneously.</p>
                </div>
              </div>
              
              <div className="flex gap-4 mb-8">
                <Link 
                  href="/problem" 
                  className="bg-primary hover:opacity-90 text-foreground px-8 h-[2.714rem] rounded-lg font-bold text-[1rem] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Understand the Crisis <ArrowRight size={20} />
                </Link>
              </div>

              <div className="p-6 bg-card border-l-4 border-primary rounded-r-lg">
                <p className="text-[#00C573] font-normal text-[12px] leading-[18px] font-sans">
                  &quot;This is a problem that needs compassion and imagination.&quot;
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border group">
               <Image
                src="/assets/forest_thermalvision.png"
                alt="Thermal vision of elephants in forest"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-md border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-red-400 font-bold text-xs uppercase tracking-widest">Motion Detected</p>
                </div>
                <div className="space-y-1.5 font-mono">
                  <p className="text-[#FAFAFA] text-sm flex justify-between">
                    <span className="text-white/60">Subject:</span> 
                    <span>Elephant Herd (7)</span>
                  </p>
                  <p className="text-[#FAFAFA] text-sm flex justify-between">
                    <span className="text-white/60">Location:</span> 
                    <span>Sector 4B [11.01°N, 76.95°E]</span>
                  </p>
                  <p className="text-[#FAFAFA] text-sm flex justify-between">
                    <span className="text-white/60">Status:</span> 
                    <span className="text-primary flex items-center gap-2">
                      <AlertTriangle size={14} />
                      Alerting Rangers...
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="site-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">
              What’s Inside the <span className="text-primary font-bold">Patrol</span>
            </h2>
            <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto font-sans">
              This is an early-stage prototype using accessible hardware and simulation tools — designed for learnability, safety, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Solar panels & battery", desc: "For endurance" },
              { name: "Thermal camera", desc: "For night detection" },
              { name: "Normal camera", desc: "For identification and evidence" },
              { name: "GPS module", desc: "For location sharing" },
              { name: "Micro:bit / Arduino", desc: "For control" },
              { name: "Speaker", desc: "For frequency deterrents" },
              { name: "Sprayer mechanism", desc: "Concept only" }
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">{item.name}</h3>
                <p className="text-[#b9b9b9] text-[14px] leading-[24px] font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/technology" 
              className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary text-[#FAFAFA] px-8 h-[2.714rem] rounded-lg font-bold text-[1rem] transition-all hover:text-primary"
            >
              View Full Tech Stack <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
