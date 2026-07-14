import { Users, Lightbulb, BadgeCheck, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const icons = [Users, Lightbulb, BadgeCheck, Handshake];

export const Differentiators = () => {
  const { lang } = useLanguage();
  const t = translations[lang].differentiators;

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep/40 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-cream tracking-tight">
            {t.title}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {t.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-brand-navy p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h4 className="text-lg font-semibold text-brand-cream mb-3 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
