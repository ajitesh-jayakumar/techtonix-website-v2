import Image from "next/image";
import { 
  AlertTriangle, 
  Shield, 
  Zap, 
  Sun, 
  Camera, 
  Radio, 
  Droplets, 
  MapPin, 
  Users, 
  Leaf, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Cpu,
  Heart,
  BookOpen,
  Lightbulb,
  Target,
  Eye,
  Activity,
  Server
} from "lucide-react";

export default function Solution() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            The Innovation
          </div>
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight drop-shadow-xl">
            The Fenceless Patrol
          </h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto leading-relaxed font-sans">
            An autonomous system designed to act as a guardian angel.
            <br className="hidden md:block" />
            Protecting the wild line without touching it.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4 relative z-10 overflow-hidden">
        <div className="site-container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">
                A Guardian in the <span className="text-primary font-bold">Sky</span>
              </h2>
              <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
                Our autonomous drone system creates a virtual barrier, detecting wildlife and gently guiding them back to safety using bio-acoustics—no fences, no harm.
              </p>
              <div className="p-6 bg-card border-l-4 border-primary rounded-r-lg">
                 <p className="text-[#00C573] font-normal text-[12px] leading-[18px] font-sans">
                   "Technology that respects boundaries without building walls."
                 </p>
               </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-border group">
               <Image
                src="/assets/drone.png"
                alt="Fenceless Patrol Drone"
                fill
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#FAFAFA] font-normal text-[14px] leading-[21px]">Solar Powered</p>
                <p className="text-primary text-[12px] leading-[18px] font-normal">Autonomous Operation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Flow */}
      <section className="py-24 px-4 relative">
        <div className="site-container mx-auto">
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-12 text-center font-sans">System Architecture Flow</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -z-10 -translate-y-1/2"></div>

            <div className="bg-card border border-border p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border-4 border-card">
                <Cpu size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">Drone Unit</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Sensors & Cameras</p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border-4 border-card">
                <Activity size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">Processing</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Image Recognition</p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border-4 border-card">
                <Radio size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">Ranger Alert</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">GPS & Image Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patrol Cycle */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="site-container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-[12px] leading-[18px] mb-2 block">Patrol Cycle</span>
            <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">A Continuous Loop of Safety</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Deploy", desc: "Solar-powered drone begins perimeter patrol autonomously.", icon: <Sun size={24} /> },
              { title: "Detect", desc: "Thermal and normal cameras scan for movement signatures.", icon: <Eye size={24} /> },
              { title: "Identify", desc: "AI/Operator identifies if it is an animal or a poacher.", icon: <Cpu size={24} /> },
              { title: "Respond", desc: "Emits specific frequencies to guide animals away safely.", icon: <Radio size={24} /> },
              { title: "Notify", desc: "Sends GPS coordinates & images to rangers immediately.", icon: <MapPin size={24} /> }
            ].map((step, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">{step.title}</h3>
                <p className="text-[12px] leading-[18px] font-normal text-[#b9b9b9] font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Core Specs */}
      <section className="py-24 px-4 relative">
        <div className="site-container mx-auto">
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-12 text-center font-sans">System Core Specs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Camera size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Dual-Purpose Vision</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">
                Combines thermal imaging for night patrol and HD optical sensors for day verification.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Cpu size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Smart Controller</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">
                Micro:bit & Arduino logic process inputs locally to determine response instantly.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Sun size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-4 font-sans">Solar Autonomy</h3>
              <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">
                Self-charging docks along the perimeter ensure 24/7 uptime without battery swaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where This Idea Can Go (Impact) */}
      <section className="py-24 px-4">
        <div className="site-container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">Where This Idea Can Go</h2>
              <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-8 font-sans">
                From a classroom concept to a potential pilot. We believe The Fenceless Patrol can scale with the right partnerships and responsible engineering.
              </p>
              
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-6 font-sans">Who Benefits?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-card p-3 rounded-lg h-fit border border-border"><ShieldCheck className="text-primary" /></div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#FAFAFA] mb-1 font-sans">Forest Departments</h4>
                    <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Gains a "third eye" in the sky, reducing dangerous foot patrols at night.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-card p-3 rounded-lg h-fit border border-border"><Users className="text-primary" /></div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#FAFAFA] mb-1 font-sans">Local Farmers</h4>
                    <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Protects crops from raids, securing livelihoods without harming animals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-card p-3 rounded-lg h-fit border border-border"><Leaf className="text-primary" /></div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#FAFAFA] mb-1 font-sans">Wildlife</h4>
                    <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Moves freely in natural habitats without risk of electrocution or traps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <h3 className="text-[24px] font-bold text-[#FAFAFA] mb-8 font-sans">Scaling Potential</h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card"></div>
                  <h4 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">1. Drone Swarms</h4>
                  <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Multiple drones coordinating to cover large forest perimeters simultaneously.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card"></div>
                  <h4 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">2. AI Recognition</h4>
                  <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Machine learning models to automatically tag species and track migration patterns.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card"></div>
                  <h4 className="text-[18px] font-bold text-[#FAFAFA] mb-2 font-sans">3. Data Integration</h4>
                  <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Feeding patrol data into national forestry dashboards for better policy making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}