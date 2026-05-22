export default function WhatWeDo() {

  return (

    <>

      {/* SECTION 1 */}
      <section className="w-full h-[160px] bg-[#ffffff] overflow-hidden py-10">

        <div className="translate-x-[250px] translate-y-[30px]">

          {/* Heading */}
          <h2 className="text-[24px] font-normal text-gray-700 mb-6">

            WHAT WE ARE GOOD AT?

          </h2>

          {/* Intro Paragraph */}
          <p className="max-w-[900px] text-[16px] text-gray-500 leading-[1.9] pb-[10px]">

            We are bringing 360-degree Digital Transformation for business
            enterprises of various sizes, as well as <br />
            technology providers by delivering assured business efficiency
            through a set of new-age technologies.

          </p>

        </div>

      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-[#ffffff] overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-[45%] translate-x-[290px]">

            <p className="text-[16px] text-gray-500 leading-[2] mb-10">

              Our aim is to ease the transition of enterprises into the
              Internet age. We <br /> offer a full range of IT, Security,
              Network, Collaboration, Data Center, <br /> Storage & Backup
              Infrastructure, Virtualization, Cloud Management,
              IT <br /> Facility Management and System integration services
              and solutions <br /> partnering with the best-of-breed
              technologies in the industry, giving a <br /> competitive edge
              to our clients to achieve their business goals in style.

            </p>

            <p className="text-[16px] text-gray-500 leading-[2]">

              We offer Storage Optimization, Cloud Migration and
              Managed Security <br /> service delivering timely solutions
              thereby enhancing operational <br /> excellence of your
              business. From networking, hardware to applications, <br />
              our team of certified experts monitor, manage and
              maintain the IT <br /> environment of 500+ customer PAN india.

            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[40vw] relative left-[210px] pt-20">

            <div
              className="w-full h-[350px] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/p1.avif')",
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