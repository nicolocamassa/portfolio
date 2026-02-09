"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function useGlobalAnimations(dependency?: string) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // --- 1. REVEAL MAIN (Minimal & Cool) ---
      // Reset immediato degli elementi prima di animare
      gsap.fromTo(
  ".reveal-main",
  {
    y: 16,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.08,
    delay: 0.15,
  }
);


      // --- 2. REVEAL STANDARD (Scroll) ---
      const elements = gsap.utils.toArray<HTMLElement>('.reveal');
      elements.forEach((el) => {
        const direction = el.getAttribute('data-direction') || 'bottom';
        let xVal = 0, yVal = 0;
        
        if (direction === 'left') xVal = -100;
        else if (direction === 'right') xVal = 100;
        else if (direction === 'top') yVal = -100;
        else yVal = 100;
        
        gsap.fromTo(el, 
          { 
            x: xVal, 
            y: yVal, 
            opacity: 0 
          },
          {
            x: 0, 
            y: 0, 
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 30%",
              scrub: 0.75,
            }
          }
        );
      });
    });
    
    return () => ctx.revert();
  }, []); // Dipendenza vuota - si riesegue ad ogni mount
}