import React from "react";

export default function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-[1px] bg-brand-gold opacity-80"></div>
      <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">
        {children}
      </span>
    </div>
  );
}
