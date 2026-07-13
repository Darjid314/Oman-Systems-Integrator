import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Network, 
  MonitorPlay, 
  Server, 
  Database, 
  ShieldAlert, 
  Glasses, 
  Cable, 
  Cctv, 
  Grid2X2, 
  Volume2, 
  Cpu, 
  Headset
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "IT & Networking Works",
      description: "Comprehensive IT infrastructure setup, network design, implementation, and optimization for enterprise environments.",
      icon: Network
    },
    {
      title: "Interactive Screens",
      description: "Deployment of One Screen brand interactive displays for modern collaboration spaces and control rooms.",
      icon: MonitorPlay
    },
    {
      title: "Huawei Products & Solutions",
      description: "Integration of Huawei enterprise networking gear, switches, routers, and enterprise communications solutions.",
      icon: Server
    },
    {
      title: "Storage Servers",
      description: "High-capacity, fault-tolerant data storage solutions designed for secure government and enterprise data retention.",
      icon: Database
    },
    {
      title: "Firewalls & Network Security",
      description: "Deployment of enterprise-grade security perimeters, threat detection, and robust firewall configurations.",
      icon: ShieldAlert
    },
    {
      title: "VR/XR Solutions",
      description: "Advanced virtual and extended reality systems for training, simulation, and visualization requirements.",
      icon: Glasses
    },
    {
      title: "Routing & Structured Cabling",
      description: "Precision-engineered structured cabling systems and complex network routing for mission-critical facilities.",
      icon: Cable
    },
    {
      title: "CCTV & Surveillance",
      description: "High-definition security camera systems, centralized monitoring, and video archiving solutions.",
      icon: Cctv
    },
    {
      title: "Video Walls",
      description: "Large-scale display arrays for command centers, NOCs, and public information broadcasting.",
      icon: Grid2X2
    },
    {
      title: "AV Solutions",
      description: "Professional audio-visual integration for conference rooms, auditoriums, and briefing centers.",
      icon: Volume2
    },
    {
      title: "OT Peripherals",
      description: "Operational Technology peripherals and integration bridging the gap between IT networks and physical industrial systems.",
      icon: Cpu
    },
    {
      title: "Desktop & IT Support",
      description: "Ongoing technical support, endpoint management, and maintenance services to ensure uninterrupted operations.",
      icon: Headset
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Systems Integration Services
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We deliver robust, scalable technology solutions designed to meet the rigorous demands of modern enterprises and government institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="rounded-none border-slate-200 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all bg-white group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-navy transition-colors">
                    <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-teal transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-slate-900 leading-snug">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
