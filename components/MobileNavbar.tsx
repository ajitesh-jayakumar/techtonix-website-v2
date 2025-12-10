'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, AlertTriangle, Lightbulb, Cpu, Users, Image as ImageIcon, Mail } from 'lucide-react';

export default function MobileNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Problem', href: '/problem', icon: AlertTriangle },
    { name: 'Solution', href: '/solution', icon: Lightbulb },
    { name: 'Tech', href: '/technology', icon: Cpu },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-white/10 pb-4">
      <div className="flex items-center justify-between px-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[4.5rem] py-3 transition-colors ${
                isActive ? 'text-primary' : 'text-white/60 hover:text-white/90'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium mt-1 whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
