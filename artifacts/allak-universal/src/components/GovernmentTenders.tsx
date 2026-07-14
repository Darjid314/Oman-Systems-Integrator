import govTenderImg from "@/assets/gov-tender.jpg";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export const GovernmentTenders = () => {
  const { lang, dir } = useLanguage();
  const t = translations[lang].tenders;

  return (
    <section className="py-24 bg-brand-navy-deep relative overflow-hidden">
      <div className={`absolute top-0 w-1/2 h-full z-0 hidden lg:block ${dir === "rtl" ? "left-0" : "right-0"}`}>
        <img
          src={govTenderImg}
          alt="Secure Data Center"
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            dir === "rtl" ? "from-transparent to-brand-navy-deep" : "from-brand-navy-deep to-transparent"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-brand-teal/15 border border-brand-teal/30 px-3 py-1 mb-6 text-sm text-brand-teal">
            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
            <span className="font-medium tracking-wide uppercase">{t.badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-brand-cream tracking-tight mb-6 leading-tight">
            {t.title}
          </h2>

          <p className="text-lg md:text-xl text-brand-cream/60 leading-relaxed mb-10 max-w-2xl">
            {t.paragraph}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl border-t border-white/10 pt-10">
            {t.cards.map((card) => (
              <div key={card.title}>
                <h4 className="text-brand-cream font-semibold text-lg mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand-teal me-3"></span>
                  {card.title}
                </h4>
                <p className="text-brand-cream/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
