export default function PartnersSection() {

  const partners = [
    "/Patner-4.png",
    "/Patner13.png",
    "/Patner14.png",
    "/Patner20.png",
    "/Patner26.png",
    "/Patner32.png",
    "/Patner16.png",
    "DLinkPatner.png"
  ];

  return (
    <section className="
      w-full
      bg-[#f5f5f5]
      pt-[70px]
      pb-[70px]
    ">

      {/* Heading */}
      <h2 className="
        text-center
        text-[25px]
        md:text-[48px]
        font-semibold
        text-gray-500
      ">
        Our Partners
      </h2>

      {/* Spacer */}
      <div style={{ height: "80px" }} />

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div className="
          flex
          items-center
          gap-20
          animate-marquee
          w-max
        ">

          {/* First Set */}
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="partner"
              className="
                h-[60px]
                md:h-[80px]
                object-contain
                opacity-90
                hover:scale-105
                transition-all
                duration-300
              "
            />
          ))}

          {/* Duplicate Set */}
          {partners.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt="partner"
              className="
                h-[60px]
                md:h-[80px]
                object-contain
                opacity-90
                hover:scale-105
                transition-all
                duration-300
              "
            />
          ))}

        </div>
      </div>

    </section>
  );
}