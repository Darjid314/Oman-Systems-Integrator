import govTenderImg from "@/assets/gov-tender.jpg";

export const GovernmentTenders = () => {
  return (
    <section className="py-24 bg-brand-navy-deep relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
        <img 
          src={govTenderImg} 
          alt="Secure Data Center" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/15 border border-brand-teal/30 px-3 py-1 mb-6 text-sm text-brand-teal">
            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
            <span className="font-medium tracking-wide">PUBLIC SECTOR & EDUCATION</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-brand-cream tracking-tight mb-6 leading-tight">
            The trusted partner for government IT infrastructure projects.
          </h2>

          <p className="text-lg md:text-xl text-brand-cream/60 leading-relaxed mb-10 max-w-2xl">
            Delivering on government tenders requires more than technical capability&mdash;it demands precision, strict compliance, and unwavering reliability. Al Lak Universal LLC is structured to meet the exacting standards of public sector procurement.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl border-t border-white/10 pt-10">
            <div>
              <h4 className="text-brand-cream font-semibold text-lg mb-2 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-teal mr-3"></span>
                Strict Compliance
              </h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                Adherence to local and international standards for security, data sovereignty, and hardware sourcing.
              </p>
            </div>
            
            <div>
              <h4 className="text-brand-cream font-semibold text-lg mb-2 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-teal mr-3"></span>
                Proven Reliability
              </h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                A track record of delivering complex integrations on time and within the specified budget constraints.
              </p>
            </div>
            
            <div>
              <h4 className="text-brand-cream font-semibold text-lg mb-2 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-teal mr-3"></span>
                Mission-Critical Support
              </h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                Ongoing maintenance and SLA-backed support structures designed for environments that cannot afford downtime.
              </p>
            </div>
            
            <div>
              <h4 className="text-brand-cream font-semibold text-lg mb-2 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-teal mr-3"></span>
                Procurement Expertise
              </h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                Deep understanding of government RFP/RFQ processes, ensuring smooth documentation and evaluation phases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
