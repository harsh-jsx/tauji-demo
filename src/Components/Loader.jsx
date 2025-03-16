"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function LoaderAnimation() {
  const loaderRef = useRef < HTMLDivElement > null;
  const housePathRef = useRef < SVGPathElement > null;
  const nameRef = useRef < HTMLDivElement > null;
  const yearRef = useRef < HTMLDivElement > null;
  const containerRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(TextPlugin);

    // Create a timeline for the animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // When animation completes, fade out the entire loader
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.inOut",
        });
      },
    });

    // Initial setup - set everything to invisible
    gsap.set([nameRef.current, yearRef.current], { opacity: 0 });

    // Set up the path for drawing animation
    if (housePathRef.current) {
      const length = housePathRef.current.getTotalLength();
      gsap.set(housePathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    }

    // Animation sequence
    tl
      // Draw the house outline
      .to(housePathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      })
      // Fade in and animate the company name with text effect
      .to(nameRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(nameRef.current, {
        text: {
          value: "Rajani Properties",
          delimiter: "",
        },
        duration: 1.5,
        ease: "none",
      })
      // Fade in the "since 1956" text
      .to(
        yearRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div
        ref={loaderRef}
        className="relative flex flex-col items-center justify-center"
      >
        {/* House SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
        >
          <path
            ref={housePathRef}
            d="M60 10L10 50V110H40V70H80V110H110V50L60 10Z"
            stroke="#8B5E34"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Company Name */}
        <div
          ref={nameRef}
          className="text-3xl font-serif tracking-wide text-[#8B5E34]"
        ></div>

        {/* Year */}
        <div
          ref={yearRef}
          className="text-sm font-light tracking-widest text-[#8B5E34] mt-2"
        >
          since 1956
        </div>
      </div>
    </div>
  );
}
