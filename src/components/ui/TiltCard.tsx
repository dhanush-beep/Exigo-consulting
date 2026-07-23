"use client";

import React, { useRef, useEffect, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Max tilt angle in degrees (default: 12)
  perspective?: number; // Perspective distance in px (default: 1000)
  scale?: number; // Scale on hover (default: 1.04)
  glareOpacity?: number; // Glare reflection opacity (default: 0.25)
  glareColor?: string; // Color of glare (default: white/teal dissolve)
  easingFactor?: number; // Interpolation smoothing factor (0.05 - 0.15, default: 0.09)
}

export default function TiltCard({
  children,
  className,
  maxTilt = 12,
  perspective = 1000,
  scale = 1.04,
  glareOpacity = 0.25,
  glareColor = "rgba(15, 107, 130, 0.22)",
  easingFactor = 0.09,
  style,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Targets for animation loop
  const targetValues = useRef({
    rotX: 0,
    rotY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareAlpha: 0,
    borderAlpha: 0,
  });

  // Current interpolated values
  const currentValues = useRef({
    rotX: 0,
    rotY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareAlpha: 0,
    borderAlpha: 0,
  });

  const animationFrameId = useRef<number | null>(null);

  // Continuous animation loop for butter-smooth linear interpolation (LERP)
  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    const borderGlow = borderGlowRef.current;
    if (!card) return;

    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      const target = targetValues.current;
      const current = currentValues.current;

      // Lerp formula: current += (target - current) * ease
      current.rotX += (target.rotX - current.rotX) * easingFactor;
      current.rotY += (target.rotY - current.rotY) * easingFactor;
      current.scale += (target.scale - current.scale) * easingFactor;
      current.glareX += (target.glareX - current.glareX) * easingFactor;
      current.glareY += (target.glareY - current.glareY) * easingFactor;
      current.glareAlpha += (target.glareAlpha - current.glareAlpha) * easingFactor;
      current.borderAlpha += (target.borderAlpha - current.borderAlpha) * easingFactor;

      // Hardware-accelerated direct DOM transform
      card.style.transform = `perspective(${perspective}px) rotateX(${current.rotX.toFixed(3)}deg) rotateY(${current.rotY.toFixed(3)}deg) scale3d(${current.scale.toFixed(4)}, ${current.scale.toFixed(4)}, ${current.scale.toFixed(4)})`;

      if (glare) {
        glare.style.opacity = current.glareAlpha.toFixed(3);
        glare.style.background = `radial-gradient(circle at ${current.glareX.toFixed(1)}% ${current.glareY.toFixed(1)}%, ${glareColor} 0%, rgba(255,255,255,0.7) 35%, transparent 75%)`;
      }

      if (borderGlow) {
        borderGlow.style.opacity = current.borderAlpha.toFixed(3);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [perspective, glareColor, easingFactor]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Update target angles smoothly
    targetValues.current.rotX = -mouseY * maxTilt * 1.8;
    targetValues.current.rotY = mouseX * maxTilt * 1.8;
    targetValues.current.scale = scale;

    // Calculate glare location
    targetValues.current.glareX = ((e.clientX - rect.left) / width) * 100;
    targetValues.current.glareY = ((e.clientY - rect.top) / height) * 100;
    targetValues.current.glareAlpha = glareOpacity;
    targetValues.current.borderAlpha = 1;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset back to flat baseline
    targetValues.current.rotX = 0;
    targetValues.current.rotY = 0;
    targetValues.current.scale = 1;
    targetValues.current.glareAlpha = 0;
    targetValues.current.borderAlpha = 0;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-[24px] preserve-3d cursor-pointer select-none will-change-transform",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    >
      {/* 3D Tilt Card Base Content */}
      <div className="relative z-10 h-full w-full">{children}</div>

      {/* Dynamic Glare & Dissolve Reflection Layer */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-[24px] z-20 overflow-hidden opacity-0"
        style={{
          mixBlendMode: "overlay",
          willChange: "opacity, background",
        }}
      />

      {/* Edge Shimmer/Dissolve Border Highlight on Hover */}
      <div
        ref={borderGlowRef}
        className="pointer-events-none absolute -inset-[1px] rounded-[25px] z-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, rgba(15,107,130,0.45) 0%, rgba(251,191,36,0.55) 50%, rgba(222,122,102,0.45) 100%)`,
          filter: "blur(2.5px)",
          willChange: "opacity",
        }}
      />
    </div>
  );
}
