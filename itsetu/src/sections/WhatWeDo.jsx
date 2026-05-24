export default function WhatWeDo() {

  return (

    <>

      {/* SECTION 1 */}
      <section className="w-full min-h-[160px] bg-[#ffffff] overflow-hidden py-10">

        <div className="
          translate-x-[20px]
          sm:translate-x-[60px]
          md:translate-x-[120px]
          lg:translate-x-[250px]

          translate-y-[20px]
          md:translate-y-[30px]

          px-4
        ">

          {/* Heading */}
          <h2 className="
            text-[18px]
            sm:text-[20px]
            md:text-[24px]

            font-normal
            text-gray-700
            mb-6
          ">

            WHAT WE DO?

          </h2>

          {/* Intro Paragraph */}
          <p className="
            max-w-[90%]
            md:max-w-[900px]

            text-[13px]
            sm:text-[14px]
            md:text-[16px]

            text-gray-500
            leading-[1.9]
            pb-[10px]
          ">

            We provide complete IT Infrastructure solutions for enterprises,
startups and organizations by delivering secure, scalable and
modern technology services that drive business growth and
operational excellence.

          </p>

        </div>

      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-[#ffffff] overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT TEXT */}
          <div className="
            w-full
            lg:w-[45%]

            translate-x-[20px]
            sm:translate-x-[60px]
            md:translate-x-[120px]
            lg:translate-x-[290px]

            px-4
          ">

            <p className="
              text-[13px]
              sm:text-[14px]
              md:text-[15px]

              text-gray-500
              leading-[1.9]
              lg:max-w-[520px]
              mb-10 translate-y-[0px] md:-translate-y-[50px]
            ">

              Our mission is to simplify the transition of businesses
into the digital era. ITSetu offers end-to-end solutions
including Networking, Cyber Security, Data Center
Infrastructure, Cloud Management, Storage & Backup,
Virtualization and IT Facility Management services
tailored to business requirements.

            </p>

            <p className="
              text-[13px]
              sm:text-[14px]
              md:text-[15px]

              text-gray-500
              leading-[1.9]
              lg:max-w-[530px]
  
            ">

              We help organizations optimize their IT operations
with advanced cloud solutions, managed security
services and reliable infrastructure support.
Our certified experts continuously monitor,
manage and maintain critical IT environments
ensuring performance, security and business continuity.

            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="
            w-full
            lg:w-[40vw]

            relative

            left-[0px]
            md:left-[60px]
            lg:left-[210px]

            pt-10
            lg:pt-20
          ">

            <div
              className="
                w-full
                h-[250px]
                sm:h-[300px]
                md:h-[390px]

                bg-cover
                bg-center
                overflow-hidden
              "
              style={{
                backgroundImage: "url('/Main.avif')",
               backgroundAttachment: "fixed"
              }}
            >

            </div>

          </div>

        </div>

      </section>

    </>

  );

}