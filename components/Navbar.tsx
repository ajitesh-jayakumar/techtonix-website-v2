import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black/25 backdrop-blur-sm border-b border-white/10 fixed top-0 w-full z-50">
      <div className="site-container px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.0714rem] items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-primary transition-colors">
                The Fenceless Patrol
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/problem" className="text-white/90 hover:text-primary px-3 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
                Problem
              </Link>
              <Link href="/solution" className="text-white/90 hover:text-primary px-3 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
                Solution
              </Link>
              <Link href="/technology" className="text-white/90 hover:text-primary px-3 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
                Technology
              </Link>
              <Link href="/team" className="text-white/90 hover:text-primary px-3 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
                Team
              </Link>
              <Link href="/gallery" className="text-white/90 hover:text-primary px-3 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
                Gallery
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-primary text-black hover:opacity-90 px-4 py-2 rounded-md text-[12px] font-bold leading-[17px] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
