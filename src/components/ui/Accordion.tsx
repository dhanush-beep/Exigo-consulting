"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpenByDefault?: boolean;
}

export function AccordionItem({
  title,
  children,
  isOpenByDefault = false
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border-b border-white/5 last:border-0 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-medium text-slate-100 hover:text-gold-500 transition-colors duration-300"
      >
        <span className="text-base sm:text-lg">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180 text-gold-500"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-slate-400 text-sm sm:text-base leading-relaxed pb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}
