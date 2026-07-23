"use client";

import React, { useEffect, useRef } from "react";

export default function DissolveEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse coordinates with target interpolation for ultra-smooth reaction
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 190 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      targetAlpha: number;
      life: number;
      maxLife: number;
      pulseOffset: number;
    }

    const colors = [
      "rgba(15, 107, 130, ",  // Brand Teal
      "rgba(251, 191, 36, ",  // Vibrant Gold
      "rgba(222, 122, 102, ", // Warm Coral
      "rgba(16, 42, 53, ",    // Executive Navy
    ];

    const particles: Particle[] = [];
    const particleCount = 60;

    const createParticle = (reset = false): Particle => {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const maxLife = 160 + Math.random() * 220;
      return {
        x: Math.random() * width,
        y: reset ? height + 20 : Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.25 - Math.random() * 0.45,
        size: 1.8 + Math.random() * 2.8,
        color: colorBase,
        alpha: 0,
        targetAlpha: 0.18 + Math.random() * 0.35,
        life: 0,
        maxLife,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw subtle connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.07 * Math.min(particles[i].alpha, particles[j].alpha);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(15, 107, 130, ${lineAlpha.toFixed(4)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Update & render particles
      particles.forEach((p, idx) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Smooth cosine ease for particle alpha fade in & dissolve
        const progress = p.life / p.maxLife;
        let fadeFactor = 1;
        if (progress < 0.2) {
          fadeFactor = progress / 0.2;
        } else if (progress > 0.75) {
          fadeFactor = (1 - progress) / 0.25;
        }

        // Add subtle natural floating wave oscillation
        const wave = Math.sin(p.life * 0.03 + p.pulseOffset) * 0.15;
        p.x += wave;

        p.alpha = Math.max(0, fadeFactor * p.targetAlpha);

        // Smooth mouse dispersion & dissolve reaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && mouse.x > 0) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x += (dx / (dist || 1)) * force * 0.4;
          p.y += (dy / (dist || 1)) * force * 0.4;
          p.alpha = Math.min(0.75, p.alpha + 0.15);
        }

        // Render soft glow radial particle
        ctx.beginPath();
        const currentRadius = p.size * 2.2;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius);
        gradient.addColorStop(0, `${p.color}${p.alpha.toFixed(3)})`);
        gradient.addColorStop(1, `${p.color}0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Respawn when life expires or moves past boundaries
        if (p.life >= p.maxLife || p.y < -30 || p.x < -30 || p.x > width + 30) {
          particles[idx] = createParticle(true);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-700 will-change-transform"
    />
  );
}
