"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const slides = [

    {
      image: "/NewI2.png",
      subtitle: "IT Infrastructure Solutions",
      title: "Transforming Businesses Through Smart IT Infrastructure"
    },

    {
      image: "/New3.png",
      subtitle: "Cyber Security & Networking",
      title: "Secure, Scalable and Reliable Technology Solutions"
    },

    {
      image: "/New4.png",
      subtitle: "Cloud & Digital Transformation",
      title: "Accelerate Your Business Growth with Modern Cloud Solutions"
    },

    {
      image: "/New5.png",
      subtitle: "24×7 Managed IT Services",
      title: "Reliable Support for Your Critical Business Operations"
    }

  ];

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

    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">

        <img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Hero Background"
          className="w-full h-full object-cover animate-fadeImage"
        />

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        <div
          key={currentSlide}
          className="text-white max-w-[850px] animate-heroContent"
        >

          {/* Subtitle */}
          <p className="text-[16px] md:text-[20px] font-normal mb-5 pt-8">

            {slides[currentSlide].subtitle}

          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">

            {slides[currentSlide].title}

          </h1>

        </div>

      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">

        {
          slides.map((_, index) => (

            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
              ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-gray-400"
              }`}
            ></div>

          ))
        }

      </div>

    </section>

  );
}