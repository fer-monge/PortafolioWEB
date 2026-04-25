import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  const contactEmail = 'jessifermv1302@gmail.com';
  const linkedInUrl =
    'https://www.linkedin.com/in/jessika-monge-v%C3%A1squez-96147a305';
  const phoneNumber = '+50672978672';

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0b1326]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-heading text-[#00E5FF] uppercase tracking-widest text-sm">
              {t('contact.label')}
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              {t('contact.title')}
            </h2>

            <p className="text-lg text-[#bac9cc] leading-8 max-w-xl">
              {t('contact.description')}
            </p>
          </div>


        <div className="lg:col-span-7">
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5FF]/5 blur-[100px] rounded-full"></div>

            <div className="space-y-6 relative z-10">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#171f33] border border-white/10 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#00363d] transition-all">
                  <span className="material-symbols-outlined">email</span>
                </div>

                <div>
                  <p className="font-heading text-sm text-slate-500 uppercase tracking-widest">
                    {t('contact.emailLabel')}
                  </p>
                  <p className="font-heading text-xl text-white break-all">
                    {contactEmail}
                  </p>
                </div>
              </a>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#171f33] border border-white/10 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#00363d] transition-all">
                  <span className="material-symbols-outlined">link</span>
                </div>

                <div>
                  <p className="font-heading text-sm text-slate-500 uppercase tracking-widest">
                    {t('contact.linkedinLabel')}
                  </p>
                  <p className="font-heading text-xl text-white">
                    Jessika Monge Vásquez
                  </p>
                </div>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#171f33] border border-white/10 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#00363d] transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>

                <div>
                  <p className="font-heading text-sm text-slate-500 uppercase tracking-widest">
                    {t('contact.numberLabel')}
                  </p>
                  <p className="font-heading text-xl text-white">
                    +506 7297-8672
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;