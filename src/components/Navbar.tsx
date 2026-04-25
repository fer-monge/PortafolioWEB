import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const nextLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12">
        <a href="#home" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#00E5FF]">
            
          </span>

          <span className="text-xl font-bold text-[#00E5FF] font-heading tracking-tight">
            {t('navbar.brand')}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-heading">
          <a className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1" href="#home">
            {t('navbar.home')}
          </a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#projects">
            {t('navbar.projects')}
          </a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#about">
            {t('navbar.about')}
          </a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#contact">
  {t('navbar.contact')}
</a>
        </div>

        <button
          onClick={changeLanguage}
          className="border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-2 rounded-lg font-heading text-sm hover:bg-[#00E5FF]/10 transition-colors"
        >
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;