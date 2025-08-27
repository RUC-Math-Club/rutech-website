'use client';

import { useEffect, useRef, useState } from "react";
import Script from 'next/script';

// Define Vanta effect interface
interface VantaEffect {
  destroy: () => void;
}

// Define Vanta rings configuration
interface VantaRingsConfig {
  el: HTMLElement | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  backgroundAlpha: number;
}

// Extend Window interface to include VANTA
declare global {
  interface Window {
    VANTA?: {
      RINGS: (config: VantaRingsConfig) => VantaEffect;
    };
  }
}

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize if VANTA is loaded and effect doesn't exist
    if (!vantaEffect && typeof window !== 'undefined' && window.VANTA) {
      setVantaEffect(
        window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x88ff00,
          backgroundColor: 0x000000,
          backgroundAlpha: 1
        })
      );
    }

    // Cleanup function
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  const handleScriptLoad = () => {
    // Initialize Vanta after scripts are loaded
    if (typeof window !== 'undefined' && window.VANTA && !vantaEffect) {
      setVantaEffect(
        window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x88ff00,
          backgroundColor: 0x000000,
          backgroundAlpha: 1
        })
      );
    }
  };

  return (
    <>
      <div 
        ref={vantaRef} 
        id="homepage-background" 
        className="z-0 w-full h-full"
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.rings.min.js"
        strategy="beforeInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}