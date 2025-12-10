import Image from "next/image";

export default function Gallery() {
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
        {/* Video Section */}
        <div className="mb-20">
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-8 border-l-4 border-primary pl-4 font-sans">Project Demo & Presentation</h2>
          <div className="aspect-video w-full max-w-5xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-border relative group">
            <video 
              controls 
              className="w-full h-full object-contain"
              poster="/assets/yuvafest1.jpg"
            >
              <source src="/assets/yuvafest.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Images Grid */}
        <div>
          <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-8 border-l-4 border-primary pl-4 font-sans">Event Photos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border group">
              <Image
                src="/assets/yuvafest1.jpg"
                alt="Team Techtonix at YUVAFEST 2025"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-card p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-medium text-sm">YUVAFEST 2025 Presentation</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border group">
              <Image
                src="/assets/yuvafest2.jpg"
                alt="Project Display"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-card p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-medium text-sm">Project Prototype Display</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
