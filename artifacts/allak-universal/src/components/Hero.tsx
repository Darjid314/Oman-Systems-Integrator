import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Server, Network } from "lucide-react";
import logoFull from "@/assets/brand/logo-full.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden bg-brand-navy"
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-deep"></div>
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          <div className="hidden lg:flex flex-col justify-self-start">
            <img
              src={logoFull}
              alt="Al Lak Universal"
              className="h-72 w-auto"
            />
            <span className="mt-1 text-center text-sm font-medium tracking-[0.3em] text-brand-teal uppercase">
              Universal
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-sm px-3 py-1 mb-6 text-sm text-brand-cream/80">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
              <span>Systems Integrator | Barka, Oman</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cream leading-[1.1] mb-6 tracking-tight">
              Mission-Critical IT Infrastructure <span className="text-brand-teal">Delivered.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-cream/70 mb-10 max-w-2xl leading-relaxed">
              Al Lak Universal specializes in precise, secure networking and systems integration solutions&mdash;the trusted partner for government IT tenders and enterprise infrastructure across the Sultanate.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contact">
                <Button size="lg" className="rounded-none h-14 px-8 text-base font-semibold group bg-brand-teal hover:bg-brand-teal/90 text-white">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-base font-semibold border-white/20 text-brand-cream hover:bg-white/10 hover:text-white">
                  Explore Capabilities
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 max-w-2xl">
              <div className="flex flex-col space-y-2">
                <ShieldCheck className="h-6 w-6 text-brand-teal" />
                <span className="text-brand-cream/90 font-medium">Government Compliant</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Server className="h-6 w-6 text-brand-teal" />
                <span className="text-brand-cream/90 font-medium">Enterprise Scale</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Network className="h-6 w-6 text-brand-teal" />
                <span className="text-brand-cream/90 font-medium">End-to-End Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
