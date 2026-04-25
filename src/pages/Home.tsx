import { useTranslation } from 'react-i18next';
import meImage from '../assets/images/me2.png';

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="mesh-gradient min-h-screen pt-32 pb-20 px-6 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6f00be]/15 text-[#ddb7ff] font-code text-xs border border-[#ddb7ff]/20">
            <span className="material-symbols-outlined text-sm"></span>
            {t('home.badge')}
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            {t('home.titleStart')}{' '}
            <span className="text-[#00E5FF]">{t('home.name')}</span>
          </h1>

          <p className="font-heading text-3xl md:text-4xl text-[#bac9cc] leading-tight">
            {t('home.subtitle')}
          </p>

          <p className="text-lg text-[#dae2fd]/70 max-w-xl leading-8">
            {t('home.description')}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.html')}
            </span>

            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.css')}
            </span>

            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.javascript')}
            </span>

            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.php')}
            </span>

            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.dotnet')}
            </span>

            <span className="bg-[#131b2e] px-4 py-2 rounded border border-white/5 font-code text-[#00E5FF]">
              {t('skills.sql')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a
              href="#projects"
              className="bg-[#00E5FF] text-[#00363d] px-8 py-4 rounded-lg font-heading uppercase tracking-widest glow-cyan transition-all active:scale-95 text-center"
            >
              {t('home.viewProjects')}
            </a>

            <a
              href="/CV-Jessika-Monge.pdf"
              download="CV-Jessika-Monge.pdf"
              className="border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/5 px-8 py-4 rounded-lg font-heading uppercase tracking-widest transition-all text-center"
            >
              {t('home.downloadCv')}
            </a>
          </div>
        </div>

       <div className="flex-1 relative group w-full max-w-md lg:max-w-lg">
  <div className="absolute -inset-4 bg-[#00E5FF]/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>

  <div className="relative glass-card rounded-2xl p-4 overflow-hidden">
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#060e20]">
      <img
        src={meImage}
        alt="Jessika Monge Vásquez"
        className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-[#050505]/85 backdrop-blur-md rounded-xl border-l-4 border-[#00E5FF] p-5 shadow-2xl">
          <p className="font-code text-sm text-[#00E5FF]">
            Jessika Monge Vásquez
          </p>

          <p className="text-[#dae2fd] text-sm mt-1">
            Web Developer · Business Informatics
          </p>
        </div>
      </div>
    </div>
</div>

          

           
          </div>
        </div>
      
    </section>
  );
}

export default Home;