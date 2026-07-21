import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass" | "coral" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0F6B82]/30 active:scale-[0.98] cursor-pointer";

  const variants = {
    primary:
      "bg-[#0F6B82] hover:bg-[#155B6D] text-white shadow-[0_4px_14px_0_rgba(15,107,130,0.3)] hover:shadow-[0_8px_24px_0_rgba(15,107,130,0.4)] hover:scale-[1.03]",
    secondary:
      "bg-[#F7F9FA] hover:bg-[#E5EBEF] text-[#1B2730] border border-[#E5EBEF]",
    outline:
      "bg-white border-2 border-[#0F6B82] text-[#0F6B82] hover:bg-[#0F6B82] hover:text-white",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
    coral:
      "bg-[#DE7A66] hover:bg-[#C96958] text-white shadow-[0_4px_14px_0_rgba(222,122,102,0.3)] hover:scale-[1.03]",
    ghost:
      "bg-transparent text-[#0F6B82] hover:bg-[#0F6B82]/8"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[15px]",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
