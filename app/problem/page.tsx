import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, Zap, Heart, TrendingDown, ShieldCheck, Sun, Activity } from "lucide-react";

export default function Problem() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight">
            The Invisible Crisis at the Forest Edge
          </h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto font-sans">
            As human habitats expand, the buffer zone shrinks. Traditional electric fences are cruel and ineffective.
          </p>
        </div>
      </div>

      <div className="site-container mx-auto px-4 py-16">
        {/* The Challenge */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">Why the Wild Line is Breaking Down</h2>
              <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
                Human expansion into forest edges increases encounters between people and wildlife. Traditional solutions are violent, expensive, and failing both sides.
              </p>
              <div className="flex gap-4">
                <div className="bg-card border border-border p-4 rounded-xl">
                  <Zap className="text-primary mb-2" />
                  <h4 className="text-[18px] font-bold text-[#FAFAFA] font-sans">High Voltage</h4>
                  <p className="text-[12px] leading-[18px] font-normal text-[#b9b9b9] font-sans">Danger Zone</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-xl">
                  <Activity className="text-primary mb-2" />
                  <h4 className="text-[18px] font-bold text-[#FAFAFA] font-sans">Habitat Loss</h4>
                  <p className="text-[12px] leading-[18px] font-normal text-[#b9b9b9] font-sans">Drives Migration</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-border group">
               <Image
                src="/assets/forest_thermalvision.png"
                alt="Thermal vision of elephants in forest"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#FAFAFA] font-normal text-[14px] leading-[21px]">Autonomous Surveillance</p>
                <p className="text-primary text-[12px] leading-[18px] font-normal">24/7 Forest Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pain & Conflict */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card border border-border p-8 rounded-3xl">
            <h3 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 flex items-center gap-3 font-sans">
              <Heart className="text-primary" /> Pain & Conflict
            </h3>
            <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
              Electric fences often injure or kill elephants and other wildlife. This causes immense suffering and doesn't solve the root cause of migration—habitat loss and hunger.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                <AlertTriangle size={18} className="text-primary" /> Electrocution risks
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                <AlertTriangle size={18} className="text-primary" /> Blocked corridors
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                <AlertTriangle size={18} className="text-primary" /> Orphaned calves
              </li>
            </ul>
            <div className="mt-6 p-4 bg-card rounded-xl border border-border">
              <p className="text-primary text-sm font-bold">Read Report: 600+ elephants died due to electrocution</p>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl">
            <h3 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 flex items-center gap-3 font-sans">
              <TrendingDown className="text-primary" /> Community Loss
            </h3>
            <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] mb-6 font-sans">
              Farmers living near forest edges face devastating crop raids. A single night can destroy a season's livelihood, leading to financial ruin and danger to human life.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                <AlertTriangle size={18} className="text-primary" /> ⚠️ Safety Risk
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                <AlertTriangle size={18} className="text-primary" /> 📉 Economic Loss
              </li>
            </ul>
            <div className="mt-6 p-4 bg-card rounded-xl border border-border">
              <p className="text-primary text-sm font-bold">Read Report: Human-wildlife conflict related losses</p>
            </div>
          </div>
        </div>

        {/* A Better Way Forward */}
        <div className="mb-20">
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-10 text-center font-sans">A Better Way Forward</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-6 font-sans">Traditional Fences</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <span className="text-primary">•</span> Physically harms animals (electrocution/cuts)
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <span className="text-primary">•</span> Expensive to maintain over long distances
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <span className="text-primary">•</span> Easily breached by intelligent animals
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-[18px] font-bold text-[#FAFAFA] mb-6 font-sans">The Fenceless Patrol</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <ShieldCheck className="text-primary shrink-0" size={20} />
                  <span>Zero physical harm (Sound/Light only)</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <Sun className="text-primary shrink-0" size={20} />
                  <span>Autonomous solar charging</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">
                  <Activity className="text-primary shrink-0" size={20} />
                  <span>Adaptable to changing paths</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#00C573] font-normal text-[16px] leading-[24px] font-sans italic">
            "This is a problem that needs compassion and imagination."
          </p>
        </div>
      </div>
    </div>
  );
}
