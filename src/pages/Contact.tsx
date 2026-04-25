import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactEmail = 'jessifermv1302@gmail.com';
  const linkedInUrl = 'https://www.linkedin.com/in/jessika-monge-v%C3%A1squez-96147a305';

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const subject = encodeURIComponent(`Portfolio contact - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
  );

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
};

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

          <div className="space-y-6">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#171f33] border border-white/10 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#00363d] transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>

              <div>
                <p className="font-heading text-sm text-slate-500 uppercase tracking-widest">
                  {t('contact.emailLabel')}
                </p>
                <p className="font-heading text-xl text-white">
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
          </div>

    
        </div>

        <div className="lg:col-span-7">
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5FF]/5 blur-[100px] rounded-full"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <h3 className="font-heading text-2xl font-semibold text-white">
                {t('contact.formTitle')}
              </h3>

              <div className="space-y-2">
                <label
                  className="font-heading text-sm text-slate-400 uppercase tracking-widest block"
                  htmlFor="name"
                >
                  {t('contact.name')}
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t( 'contact.namePlaceholder')}
                  className="w-full bg-[#0B0F1A] border-0 border-b-2 border-[#3b494c] focus:border-[#00E5FF] focus:ring-0 text-lg py-4 px-0 transition-colors placeholder:text-slate-700 text-white outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="font-heading text-sm text-slate-400 uppercase tracking-widest block"
                  htmlFor="email"
                >
                  {t('contact.email')}
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full bg-[#0B0F1A] border-0 border-b-2 border-[#3b494c] focus:border-[#00E5FF] focus:ring-0 text-lg py-4 px-0 transition-colors placeholder:text-slate-700 text-white outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="font-heading text-sm text-slate-400 uppercase tracking-widest block"
                  htmlFor="message"
                >
                  {t('contact.message')}
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full bg-[#0B0F1A] border-0 border-b-2 border-[#3b494c] focus:border-[#00E5FF] focus:ring-0 text-lg py-4 px-0 transition-colors placeholder:text-slate-700 text-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-[#00E5FF] text-[#00363d] px-8 py-4 rounded-lg font-heading text-sm tracking-widest uppercase hover:bg-[#00daf3] transition-all active:scale-95 glow-cyan"
              >
                {t('contact.send')}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;