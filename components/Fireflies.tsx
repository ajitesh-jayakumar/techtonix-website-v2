"use client";

import { useEffect, useState } from "react";

export default function Fireflies() {
  const [fireflies, setFireflies] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const count = 30;
    const newFireflies = Array.from({ length: count }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 15}s`,
        // We use CSS variables for random movement paths
        // @ts-ignore
        "--move-x": `${(Math.random() - 0.5) * 300}px`,
        "--move-y": `${(Math.random() - 0.5) * 300}px`,
      } as React.CSSProperties,
    }));
    setFireflies(newFireflies);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={f.style}
        />
      ))}
    </div>
  );
}
