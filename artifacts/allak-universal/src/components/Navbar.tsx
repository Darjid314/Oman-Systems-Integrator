import { cn } from '@/lib/utils';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import logoIcon from '@/assets/brand/logo-icon.png';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const LanguageToggle = ({ className }: { className?: string }) => (
    <button
      onClick={toggleLanguage}
      className={cn(
        'flex items-center gap-1 border border-white/20 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-cream/90 hover:bg-white/10 hover:text-white transition-colors',
        className
      )}
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'text-brand-teal' : ''}>EN</span>
      <span className="text-brand-cream/30">/</span>
      <span className={lang === 'ar' ? 'text-brand-teal' : ''}>AR</span>
    </button>
  );

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-md py-3'
          : 'bg-brand-navy py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={logoIcon}
                alt="Al Lak Universal"
                className="h-9 w-auto md:h-10"
              />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-brand-cream">
                  AL LAK
                </span>
                <span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-brand-teal uppercase">
                  Universal
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-cream/80 transition-colors hover:text-brand-cream"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button className="font-semibold rounded-none px-6 bg-brand-teal text-white hover:bg-brand-teal/90">
                {t.nav.cta}
              </Button>
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle className="px-2.5 py-1" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-cream"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-navy shadow-lg border-t border-white/10 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-cream font-medium py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-4 rounded-none bg-brand-teal text-white hover:bg-brand-teal/90">
              {t.nav.cta}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};
