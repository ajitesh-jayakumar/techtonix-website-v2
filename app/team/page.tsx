import type { Metadata } from "next";
import { Quote, GraduationCap, Award, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "The Team | The Fenceless Patrol",
  description: "Meet the Grade 7 innovators from Yuvabharathi Public School behind The Fenceless Patrol.",
};


export default function Team() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight">Grade 7 Innovators</h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] max-w-3xl mx-auto font-sans">
            Team Techtonix • United by curiosity and a desire to solve real-world problems.
          </p>
        </div>
      </div>

      <div className="site-container mx-auto px-4 py-16">
        {/* School & Event Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card border border-border p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] font-sans">
                <a href="https://www.yuvabharathi.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Yuvabharathi Public School
                </a>, Coimbatore
              </h2>
            </div>
            <p className="text-[#b9b9b9] text-[16px] leading-[25px] font-sans">
              Our school encourages us to think beyond textbooks and use technology for social good. This project was developed under the guidance of our mentors and the innovation lab ecosystem at <a href="https://www.yuvabharathi.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Yuvabharathi Public School</a>, Coimbatore.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={32} />
              <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] font-sans">Showcased at Yuva Fest 2025</h2>
            </div>
            <p className="text-[#b9b9b9] text-[16px] leading-[25px] font-sans">
              A standout exhibit at the school's annual festival (Nov 2025). The event celebrated "multifaceted learning," and the project earned wide appreciation from parents and visitors for its creative approach to wildlife conservation.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-12 text-center font-sans">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              name: "Ajitesh J.",
              quote: "Building things that save lives is the best engineering."
            },
            {
              name: "Shri Harshun L.",
              quote: "Technology must serve nature, not destroy it."
            },
            {
              name: "Sharvanth",
              quote: "Code can be a voice for the voiceless."
            },
            {
              name: "Dikshith",
              quote: "Innovation happens when we care."
            },
            {
              name: "Vainavi",
              quote: "Understanding the problem is half the solution."
            },
            {
              name: "Avanthika",
              quote: "Spreading awareness is how we start change."
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6 text-3xl border-2 border-border group-hover:border-primary transition-colors">
                🎓
              </div>
              <h3 className="text-[18px] font-bold text-[#FAFAFA] text-center mb-6 font-sans">{member.name}</h3>
              
              <div className="relative">
                <Quote className="absolute -top-3 -left-1 text-primary/30 rotate-180" size={20} />
                <p className="text-[#b9b9b9] text-center italic px-2 relative z-10 text-sm font-sans">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
