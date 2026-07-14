import logoIcon from "@/assets/brand/logo-icon.png";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-brand-navy-deep text-brand-cream/70 py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="Al Lak Universal" className="h-9 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold tracking-wide text-brand-cream">AL LAK</span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-brand-teal uppercase">{t.hero.wordmark}</span>
              </span>
            </div>
            <p className="max-w-sm mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="space-y-2 text-sm">
              <p>Office# 2A, 1st Floor, Al Farsi Building &ndash; Grand Central</p>
              <p>PO Box-210, PC-320, Barka, Sultanate of Oman</p>
              <p dir="ltr">sales@allakuniversal.com &nbsp;&bull;&nbsp; +968 9292-9191</p>
              <p dir="ltr">www.allakuniversal.com</p>
              <p className="pt-2 text-brand-cream/50">{t.contact.crLabel}: 1469708 &nbsp;&bull;&nbsp; {t.contact.vatinLabel}: OM1100327696</p>
            </div>
          </div>

          <div>
            <h4 className="text-brand-cream font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-cream transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-brand-cream transition-colors">{t.nav.services}</a></li>
              <li><a href="#about" className="hover:text-brand-cream transition-colors">{t.nav.about}</a></li>
              <li><a href="#contact" className="hover:text-brand-cream transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-cream font-semibold mb-4">{t.footer.coreFocus}</h4>
            <ul className="space-y-3 text-sm">
              {t.footer.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-brand-cream/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Al Lak Universal. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">{t.footer.tagline2}</p>
        </div>
      </div>
    </footer>
  );
};
