import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-24">
        <div className="rounded-[40px] border border-slate-200 bg-white p-12 shadow-2xl">
          <div className="space-y-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2563eb]">Our Services</p>
            <h1 className="text-5xl font-semibold tracking-[-0.04em]">Technology Services Built For Growth</h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Discover how we combine infrastructure, cloud, security, and advisory services to deliver reliable IT operations and digital transformation across industries.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Cloud Transformation",
                description: "Secure migration, optimization, and ongoing cloud management for scalable infrastructure.",
              },
              {
                title: "Managed Infrastructure",
                description: "Proactive monitoring, server support, and IT managed services for mission-critical systems.",
              },
              {
                title: "ERP / CRM Consulting",
                description: "Process-driven technology advisory and implementation support for enterprise applications.",
              },
            ].map((service) => (
              <div key={service.title} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
