import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = () => {
    const nextLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center h-16 px-6 md:px-12">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          

          <span className="text-xl font-bold text-[#00E5FF] font-heading tracking-tight">
            {t('navbar.brand')}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-heading">
          <a
            className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1"
            href="#home"
          >
            {t('navbar.home')}
          </a>

          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="#projects"
          >
            {t('navbar.projects')}
          </a>

          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="#about"
          >
            {t('navbar.about')}
          </a>

          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="#contact"
          >
            {t('navbar.contact')}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={changeLanguage}
            className="border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-2 rounded-lg font-heading text-sm hover:bg-[#00E5FF]/10 transition-colors"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={changeLanguage}
            className="border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-2 rounded-lg font-heading text-sm hover:bg-[#00E5FF]/10 transition-colors"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7H20" />
                <path d="M4 12H20" />
                <path d="M4 17H20" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-5 flex flex-col gap-4 font-heading">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-[#00E5FF] py-3 border-b border-white/10"
            >
              {t('navbar.home')}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-slate-300 hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors"
            >
              {t('navbar.projects')}
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-slate-300 hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors"
            >
              {t('navbar.about')}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-300 hover:text-[#00E5FF] py-3 transition-colors"
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;