"use client";
import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Step 1: Pen slides in from left
    const timer1 = setTimeout(() => {
      setAnimationStep(1);
    }, 500);

    // Step 2: Paper floats in with rotation
    const timer2 = setTimeout(() => {
      setAnimationStep(2);
    }, 1500);

    // Step 3: Both elements settle and ink draws
    const timer3 = setTimeout(() => {
      setAnimationStep(3);
    }, 3000);

    // Step 4: Text appears
    const timer4 = setTimeout(() => {
      setAnimationStep(4);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const resetAnimation = () => {
    setAnimationStep(0);
    setTimeout(() => setAnimationStep(1), 500);
    setTimeout(() => setAnimationStep(2), 1500);
    setTimeout(() => setAnimationStep(3), 3000);
    setTimeout(() => setAnimationStep(4), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted overflow-hidden relative">
      
      {/* Two-column grid layout */}
      <div className="grid grid-cols-2 h-screen">
        
        {/* Left Column - App Name */}
        <div className="flex items-center justify-center relative">
          <div 
            className={`text-center transition-all duration-1000 ${
              animationStep >= 4 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-8'
            }`}
            style={{ animationDelay: '3.5s' }}
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 animate-glow">
              CreedLink
            </h1>
            <div className="space-y-4">
              <p className="text-2xl text-muted-foreground font-medium">
                Digital Trust Solutions
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Building trust through innovation, one signature at a time
              </p>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-16 w-1 h-1 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Right Column - Animation */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-96 h-96">
            
            {/* Paper Element */}
            <div 
              className={`absolute transition-all duration-2500 ease-out ${
                animationStep >= 2
                  ? 'translate-x-0 translate-y-0 rotate-12 opacity-100 scale-100' 
                  : 'translate-x-full translate-y-16 rotate-180 opacity-0 scale-75'
              }`}
              style={{
                transformOrigin: 'center center',
                left: '-20px',
                top: '-10px',
                filter: 'drop-shadow(var(--shadow-paper))'
              }}
            >
              <div className="bg-gradient-to-br from-card to-muted border-2 border-border w-80 h-96 relative rounded-lg shadow-2xl">
                {/* Paper binding holes */}
                <div className="absolute left-8 top-12 w-3 h-3 bg-muted-foreground/20 rounded-full"></div>
                <div className="absolute left-8 top-20 w-3 h-3 bg-muted-foreground/20 rounded-full"></div>
                <div className="absolute left-8 top-28 w-3 h-3 bg-muted-foreground/20 rounded-full"></div>
                
                {/* Paper lines */}
                <div className="absolute left-16 top-12 right-6 border-b border-muted-foreground/30"></div>
                <div className="absolute left-16 top-16 right-6 border-b border-muted-foreground/20"></div>
                <div className="absolute left-16 top-20 right-6 border-b border-muted-foreground/20"></div>
                <div className="absolute left-16 top-24 right-6 border-b border-muted-foreground/20"></div>
                <div className="absolute left-16 top-28 right-6 border-b border-muted-foreground/20"></div>
                
                {/* CreedLink Text on Paper */}
                <div className="absolute top-36 left-16 right-8">
                  <h2 className="text-5xl font-bold text-foreground mb-2 tracking-tight">CreedLink</h2>
                  <p className="text-2xl text-accent font-medium ml-32">trust</p>
                  
                  {/* Signature line */}
                  <div className="mt-8 border-b border-muted-foreground/40 w-48 relative">
                    <span className="absolute -bottom-6 text-sm text-muted-foreground">Digital Signature</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pen Element */}
            <div 
              className={`absolute transition-all z-20 ${
                animationStep >= 3
                  ? 'translate-x-40 translate-y-12 rotate-45 opacity-100 duration-1000'
                  : animationStep >= 1
                    ? 'translate-x-20 translate-y-20 rotate-180 opacity-100 duration-1200'
                    : '-translate-x-full translate-y-20 rotate-0 opacity-0 duration-0'
              }`}
              style={{
                transformOrigin: 'center center',
                left: '80px',
                top: '60px',
                filter: 'drop-shadow(var(--shadow-pen))'
              }}
            >
              <div className="relative">
                {/* Pen body */}
                <div className="w-10 h-48 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 rounded-full relative shadow-2xl">
                  
                  {/* Pen cap */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-gray-700 rounded-t-full">
                    {/* Pen clip */}
                    <div className="absolute -right-1.5 top-3 w-4 h-10 bg-gray-600 rounded-md shadow-lg"></div>
                  </div>
                  
                  {/* Pen grip section */}
                  <div className="absolute top-16 left-0 right-0 h-20 bg-gradient-to-b from-gray-700 to-gray-600">
                    {/* Grip texture */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="absolute left-0 right-0 h-0.5 bg-gray-800" style={{ top: `${i * 2 + 8}px` }}></div>
                    ))}
                  </div>
                  
                  {/* Gold accent ring */}
                  <div className="absolute top-28 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>
                  
                  {/* Pen tip */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-gray-800 to-black rounded-b-full"></div>
                </div>

                {/* Ink trail */}
                <div 
                  className={`absolute bottom-4 -right-12 transition-all duration-1000 ${
                    animationStep >= 3 
                      ? 'opacity-100 animate-ink-draw' 
                      : 'opacity-0 w-0'
                  } h-1 bg-gradient-to-r from-primary to-accent rounded-full`}
                  style={{ 
                    transformOrigin: 'left center',
                    transform: 'rotate(-45deg)',
                    animationDelay: '0.5s'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Floating animation particles */}
          <div className="absolute top-16 right-20 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Bottom Welcome Text */}
      <div 
        className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
          animationStep >= 4 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ animationDelay: '4s' }}
      >
        <h3 className="text-3xl font-bold text-foreground mb-3">Welcome to the Future of Trust</h3>
        <p className="text-lg text-muted-foreground mb-6">Experience seamless digital signature solutions</p>
      
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </div>
  );
}