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
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const icons = [
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
  Headset,
];

export const Services = () => {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.items.map((service, index) => {
            const Icon = icons[index];
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
