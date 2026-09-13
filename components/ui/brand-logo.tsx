"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  width?: number;
  height?: number;
}

export function BrandLogo({ className = "", size = "lg" }: BrandLogoProps) {
  // Dimension definitions ensuring identical bounding box for both theme logos
  const dimensions = {
    sm: "w-[130px] sm:w-[150px] h-[28px] sm:h-[32px]",
    md: "w-[150px] sm:w-[180px] h-[32px] sm:h-[38px]",
    lg: "w-[170px] sm:w-[210px] h-[36px] sm:h-[44px]",
    xl: "w-[210px] sm:w-[260px] h-[44px] sm:h-[54px]",
  }[size];

  return (
    <div className={`relative flex items-center shrink-0 ${dimensions} ${className}`}>
      {/* Light Theme Logo */}
      <Image
        src="/images/logo-light.png"
        alt="tweliza Digital Solutions"
        fill
        className="block dark:hidden object-contain object-left"
        priority
        sizes="(max-width: 768px) 170px, 210px"
      />

      {/* Dark Theme Logo */}
      <Image
        src="/images/logo-dark.png"
        alt="tweliza Digital Solutions"
        fill
        className="hidden dark:block object-contain object-left"
        priority
        sizes="(max-width: 768px) 170px, 210px"
      />
    </div>
  );
}

interface CircularBrandLogoProps {
  className?: string;
  size?: number; // Size in px
}

export function CircularBrandLogo({ className = "", size = 180 }: CircularBrandLogoProps) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#1d001d] via-[#a832a8] to-[#4b36e3] shadow-2xl transition-transform duration-500 hover:scale-105 ${className}`}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-[#000000] relative flex items-center justify-center p-2 border-2 border-white/20">
        <Image
          src="/images/logo-circular.png"
          alt="tweliza Digital Solutions Official Circular Logo"
          fill
          className="object-cover rounded-full"
          priority
          sizes={`${size}px`}
        />
      </div>
    </div>
  );
}
