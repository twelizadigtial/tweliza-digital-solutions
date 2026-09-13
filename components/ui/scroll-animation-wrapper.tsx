"use client";

import React, { useRef, useEffect, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useReducedMotion,
  HTMLMotionProps 
} from "framer-motion";
import { cn } from "@/lib/utils";

interface Scroll3DItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  effect?: "fall-in" | "expand" | "tilt-3d" | "parallax" | "levitate" | "slide-3d";
  depth?: number; // translateZ depth effect in px
  rotateXAmount?: number; // max X rotation in degrees
  rotateYAmount?: number; // max Y rotation in degrees
  scaleRange?: [number, number]; // [initial, target]
  opacityRange?: [number, number]; // [initial, target]
  offsetStart?: number; // scroll view offset start (0 to 1)
  offsetEnd?: number; // scroll view offset end (0 to 1)
}

export function Scroll3DItem({
  children,
  className,
  effect = "tilt-3d",
  depth = 60,
  rotateXAmount = 12,
  rotateYAmount = 8,
  scaleRange = [0.92, 1],
  opacityRange = [0.2, 1],
  offsetStart = 0.1,
  offsetEnd = 0.8,
  ...props
}: Scroll3DItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress of this specific element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${offsetStart * 100}% 100%`, `${offsetEnd * 100}% 0%`]
  });

  // Smooth physics spring for organic movement without scroll jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate Mobile-toned values
  const effectiveRotateX = isMobile ? rotateXAmount * 0.25 : rotateXAmount;
  const effectiveRotateY = isMobile ? rotateYAmount * 0.25 : rotateYAmount;
  const effectiveDepth = isMobile ? depth * 0.3 : depth;

  // Transform mappings based on selected effect
  const yFall = useTransform(smoothProgress, [0, 0.5, 1], [isMobile ? -30 : -75, 0, isMobile ? 30 : 50]);
  const ySlide = useTransform(smoothProgress, [0, 0.5, 1], [isMobile ? 25 : 60, 0, isMobile ? -25 : -40]);
  const rotateXFall = useTransform(smoothProgress, [0, 0.5, 1], [-effectiveRotateX, 0, effectiveRotateX * 0.5]);
  const rotateYTilt = useTransform(smoothProgress, [0, 0.5, 1], [effectiveRotateY, 0, -effectiveRotateY]);
  const zTranslate = useTransform(smoothProgress, [0, 0.5, 1], [-effectiveDepth, 0, effectiveDepth * 0.4]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], 0.98]);
  const opacity = useTransform(smoothProgress, [0, 0.35, 0.85, 1], [opacityRange[0], opacityRange[1], 1, 0.8]);

  // If user requested reduced motion, disable 3D scroll transforms entirely for full accessibility
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Effect-specific style mappings
  const getTransformStyles = () => {
    switch (effect) {
      case "fall-in":
        return {
          y: yFall,
          rotateX: rotateXFall,
          z: zTranslate,
          scale,
          opacity,
        };
      case "expand":
        return {
          scale,
          opacity,
          z: zTranslate,
          rotateX: rotateXFall,
        };
      case "tilt-3d":
        return {
          y: ySlide,
          rotateX: rotateXFall,
          rotateY: rotateYTilt,
          z: zTranslate,
          scale,
          opacity,
        };
      case "parallax":
        return {
          y: ySlide,
          z: zTranslate,
          opacity,
        };
      case "slide-3d":
        return {
          y: ySlide,
          rotateX: rotateXFall,
          opacity,
        };
      case "levitate":
        return {
          y: ySlide,
          z: zTranslate,
          scale,
          opacity,
        };
      default:
        return {
          y: ySlide,
          rotateX: rotateXFall,
          opacity,
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        ...getTransformStyles(),
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      className={cn("relative transition-shadow duration-300", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3D Scene Perspective Parent Container
 */
export function Scroll3DContainer({
  children,
  className,
  perspective = 1200
}: {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
}) {
  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={cn("relative w-full overflow-visible", className)}
    >
      {children}
    </div>
  );
}
