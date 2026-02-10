"use client";
import { useRef, useEffect } from "react";
import { useGlobalAnimations } from "@/_utils/animation";
import { Container } from "@/_components/layout";

export default function HeroAnimation({
  children,
}: {
  heroBanner: any;
  children: any;
}) {
  useGlobalAnimations();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const targetTimeRef = useRef(0);
  const smoothness = 0.07;

  // Loop di animazione per la fluidità
  useEffect(() => {
    const updateVideoPosition = () => {
      if (videoRef.current) {
        const diff = targetTimeRef.current - videoRef.current.currentTime;
        if (Math.abs(diff) > 0.0001) {
          videoRef.current.currentTime += diff * smoothness;
        }
      }
      requestAnimationFrame(updateVideoPosition);
    };
    const frame = requestAnimationFrame(updateVideoPosition);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Calcolo della posizione dello scroll rispetto al banner
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcoliamo quando il banner entra ed esce dal viewport
      // 0 = il banner sta entrando dal basso, 1 = il banner sta uscendo dall'alto
      const visibleRange = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;

      let progress = currentPos / visibleRange;
      progress = Math.max(0, Math.min(1, progress));

      if (videoRef.current.duration) {
        targetTimeRef.current = progress * videoRef.current.duration;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={bannerRef} className="relative mt-20 sm:mt-24 lg:mt-35 w-full">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover z-999"
            src="/images/output_ottimizzato.mp4"
            playsInline
            muted
            preload="auto"
            crossOrigin="anonymous"
          />

          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* CONTENUTO SOPRA IL VIDEO */}
        <Container className="relative z-10 px-8 sm:px-6 pb-2">
          <div
            className="
            -translate-y-6 sm:-translate-y-10
            rounded-2xl bg-white
            flex flex-col md:flex-row
            divide-y md:divide-y-0 md:divide-x
            divide-(--border-default)
            shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]
            overflow-hidden border border-(--border-default)/50"
          >
            {children}
          </div>
        </Container>
      </div>
    </>
  );
}
