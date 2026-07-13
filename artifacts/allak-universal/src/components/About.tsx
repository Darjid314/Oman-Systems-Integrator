import aboutOffice from "@/assets/about-office.jpg";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-teal translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={aboutOffice}
              alt="Corporate Office"
              className="w-full h-[500px] object-cover border border-slate-200 shadow-xl"
            />

            <div className="absolute -bottom-8 -left-8 bg-brand-navy text-brand-cream p-6 md:p-8 max-w-[280px] shadow-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-brand-teal mb-2">Oman</p>
              <p className="text-sm text-brand-cream/70 font-medium tracking-wide uppercase">Based in Barka, Serving the Sultanate</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">Corporate Profile</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              A serious capability for complex infrastructure.
            </h3>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                Based in Barka, Oman, Al Lak Universal LLC is a premier IT company specializing in mission-critical IT and networking solutions. We build the foundational technology that modern organizations and government institutions rely on to operate securely and efficiently.
              </p>
              <p>
                Our core competency lies in understanding complex operational requirements and translating them into robust, vendor-agnostic infrastructure. We do not just supply equipment; we engineer solutions that ensure uptime, security, and scalability for years to come.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <span className="font-semibold text-slate-800">Systems Integration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <span className="font-semibold text-slate-800">IT Infrastructure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <span className="font-semibold text-slate-800">Enterprise Networking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <span className="font-semibold text-slate-800">Turnkey Deployments</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
