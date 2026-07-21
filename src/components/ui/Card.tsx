import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  glow?: boolean;
  variant?: "default" | "flat" | "tinted";
}

export default function Card({
  children,
  className,
  hoverable = true,
  glow = false,
  variant = "default",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white border border-[#E5EBEF] shadow-[0_2px_12px_0_rgba(15,107,130,0.06),0_1px_3px_0_rgba(27,39,48,0.06)]",
    flat: "bg-[#F7F9FA] border border-[#E5EBEF]",
    tinted: "bg-[rgba(15,107,130,0.03)] border border-[rgba(15,107,130,0.12)]"
  };

  return (
    <div
      className={cn(
        "rounded-[24px] p-6 relative overflow-hidden transition-all duration-400",
        variants[variant],
        hoverable && "hover:translate-y-[-10px] hover:shadow-[0_12px_40px_-8px_rgba(15,107,130,0.18),0_4px_12px_0_rgba(27,39,48,0.08)] hover:border-[#0F6B82]",
        className
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-[#6C7A86] text-[15px] leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-[#E5EBEF]", className)} {...props}>
      {children}
    </div>
  );
}
