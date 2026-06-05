"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/NewI2.png",
    subtitle: "IT Infrastructure Solutions",
    title: "Transforming Businesses Through Smart IT Infrastructure",
  },
  {
    image: "/New3.png",
    subtitle: "Cyber Security & Networking",
    title: "Secure, Scalable and Reliable Technology Solutions",
  },
  {
    image: "/New4.png",
    subtitle: "Cloud & Digital Transformation",
    title: "Accelerate Your Business Growth with Modern Cloud Solutions",
  },
  {
    image: "/New5.png",
    subtitle: "24×7 Managed IT Services",
    title: "Reliable Support for Your Critical Business Operations",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-[350px] sm:h-[420px] md:h-[520px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Hero Background"
          fill
          priority
          className="object-cover animate-fadeImage"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div
          key={currentSlide}
          className="text-white max-w-[850px] text-center animate-heroContent"
        >
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-xl font-normal mb-3 md:mb-5">
            {slides[currentSlide].subtitle}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight max-w-[90%] mx-auto">
            {slides[currentSlide].title}
          </h1>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}