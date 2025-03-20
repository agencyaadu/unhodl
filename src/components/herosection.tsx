"use client";
// src/components/HeroSection.tsx
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Lenis from "lenis";
import Link from "next/link";

// Main hero section component
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Remove smoothTouch as it's not in the type definitions
      touchMultiplier: 2,
    });

    // Link lenis to requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    return () => {
      // Clean up
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative flex w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* Add fallback sources if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

      {/* Left content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full lg:w-1/2 z-10">
        <div className="max-w-xl">
          <p className="text-white font-medium mb-4">DIRECT DEPOSIT</p>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Spend, Save and Borrow with Your Bitcoin.
          </h1>
          <p className="text-white text-xl mb-8">
            With direct deposit<sup>2</sup>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/get-started">
              <Button className="bg-purple-300 text-black hover:bg-purple-400 rounded-full px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Link
              href="/checking-options"
              className="text-white hover:underline py-2"
            >
              See our checking options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
