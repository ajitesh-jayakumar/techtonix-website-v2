import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card text-foreground min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="site-container px-4 text-center relative z-10">
          <h1 className="text-[63px] leading-[63px] font-normal mb-6 text-[#FAFAFA] tracking-tight">Get in Touch</h1>
          <p className="text-[16px] leading-[25px] font-normal text-[#b9b9b9] font-sans">We&apos;d love to hear your feedback and questions.</p>
        </div>
      </div>

      <div className="site-container max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">Contact Information</h2>
            <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] mb-8 font-sans">
              Whether you are a judge, a teacher, or just curious about our project, feel free to reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-xl mr-4 text-primary">🏫</span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#FAFAFA] font-sans">School</h3>
                  <span className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">
                    <a href="https://www.yuvabharathi.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Yuvabharathi Public School</a>, Coimbatore
                  </span>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-xl mr-4 text-primary">👥</span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#FAFAFA] font-sans">Team Name</h3>
                  <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">
                    Techtonix
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-xl mr-4 text-primary">📍</span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#FAFAFA] font-sans">Location</h3>
                  <p className="text-[14px] leading-[24px] font-normal text-[#b9b9b9] font-sans">Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
            <h2 className="text-[32px] leading-[38px] font-normal text-[#FAFAFA] mb-6 font-sans">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
