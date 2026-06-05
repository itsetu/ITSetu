export default function WhatWeDo() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full min-h-[160px] bg-[#ffffff] overflow-hidden py-10">
        
        <div className="
          px-6
          text-center
          lg:text-left

          lg:translate-x-[250px]
          lg:translate-y-[30px]
        ">
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

          <p className="
            mx-auto
            lg:mx-0
            max-w-[600px]
            lg:max-w-[900px]
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

            px-6
            text-center
            lg:text-left

            lg:translate-x-[290px]
          ">
            <p className="
              mx-auto
              lg:mx-0
              max-w-[600px]
              lg:max-w-[520px]
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              text-gray-500
              leading-[1.9]
              mb-6
              lg:mb-10
              lg:-translate-y-[50px]
            ">
              Our mission is to simplify the transition of businesses
              into the digital era. ITSetu offers end-to-end solutions
              including Networking, Cyber Security, Data Center
              Infrastructure, Cloud Management, Storage & Backup,
              Virtualization and IT Facility Management services
              tailored to business requirements.
            </p>

            <p className="
              mx-auto
              lg:mx-0
              max-w-[600px]
              lg:max-w-[530px]
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              text-gray-500
              leading-[1.9]
            ">
              We help organizations optimize their IT operations
              with advanced cloud solutions, managed security
              services and reliable infrastructure support.
              Our certified experts continuously monitor,
              manage and maintain critical IT environments
              ensuring performance, security and business continuity.
            </p>
          </div>

          {/* RIGHT IMAGE — untouched */}
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
                backgroundImage: "url('/NewBackground6.png')",
                backgroundAttachment: "fixed"
              }}
            />
          </div>

        </div>
      </section>
    </>
  );
}