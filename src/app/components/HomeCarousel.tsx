"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/me-camera.webp", alt: "Paul Catlin 1" },
  { src: "/images/me-camera.webp", alt: "Paul Catlin 2" },
  { src: "/images/me-camera.webp", alt: "Paul Catlin 3" },
];

export default function HomeCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * currentIndex;
      if (Math.abs(carouselRef.current.scrollLeft - scrollAmount) > 5) {
        isProgrammaticScroll.current = true;
        
        // If looping from end to start, skip smooth transition to avoid "rewind" glitch
        // behavior "instant" is supported but "smooth" is standard. 
        // We use cast to any or ScrollBehavior to satisfy TS if needed, 
        // though "instant" is part of modern CSSOM scroll options.
        const behavior = (currentIndex === 0 && carouselRef.current.scrollLeft > carouselRef.current.offsetWidth) ? "instant" : "smooth";
        
        carouselRef.current.scrollTo({
          left: scrollAmount,
          behavior: behavior as "instant" | "smooth",
        });

        // If instant, reset programmatic flag immediately
        if (behavior === "instant") {
          isProgrammaticScroll.current = false;
        }
      }
    }
  }, [currentIndex]);

  const handleScroll = () => {
    if (carouselRef.current) {
      if (isProgrammaticScroll.current) {
        // Check if we have reached the destination or are very close
        const scrollAmount = carouselRef.current.offsetWidth * currentIndex;
        if (Math.abs(carouselRef.current.scrollLeft - scrollAmount) < 5) {
          isProgrammaticScroll.current = false;
        }
        return;
      }
      const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  return (
    <div
      ref={carouselRef}
      onScroll={handleScroll}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="carousel rounded-box max-w-128 overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5"
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item w-full">
          <Image
            src={image.src}
            alt={image.alt}
            className="rounded-md"
            width={1000}
            height={750}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
