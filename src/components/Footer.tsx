import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-white/5 px-6 md:px-12 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-[#00E5FF] text-sm uppercase tracking-widest">
            © {currentYear} Jessika Monge Vásquez
          </p>

          <p className="text-slate-500 text-sm mt-2">
            {t('footer.rights')}
          </p>
        </div>

        <p className="text-slate-500 text-sm text-center">
          {t('footer.built')}
        </p>

        <div className="flex gap-6 font-heading text-xs uppercase tracking-widest">
          <a
            href="https://github.com/fer-monge"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-[#00E5FF] transition-colors"
          >
            {t('footer.github')}
          </a>

          <a
            href="https://www.linkedin.com/in/jessika-monge-v%C3%A1squez-96147a305"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-[#00E5FF] transition-colors"
          >
            {t('footer.linkedin')}
          </a>

          <a
            href="mailto:jessifermv1302@gmail.com"
            className="text-slate-500 hover:text-[#00E5FF] transition-colors"
          >
            {t('footer.email')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;