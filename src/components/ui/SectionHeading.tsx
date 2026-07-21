import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right"
  };

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        alignStyles[align],
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.12em] text-[#0F6B82] uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-[700] text-[#1B2730] tracking-tight leading-[1.15] mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-[18px] text-[#6C7A86] leading-relaxed mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
