import { useTranslation } from 'react-i18next';

interface TimelineItem {
  role?: string;
  title?: string;
  place?: string;
  date: string;
  description?: string;
}

function About() {
  const { t } = useTranslation();

  const experience = t('about.experience', {
    returnObjects: true,
  }) as TimelineItem[];

  const education = t('about.education', {
    returnObjects: true,
  }) as TimelineItem[];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'C#',
    '.NET',
    'Java',
    'SQL',
    'Laravel',
    'ASP.NET Core',
    'Spring Boot',
    'Bootstrap',
    'MySQL',
    'SQL Server',
    'MongoDB',
    'Git',
    'GitHub',
    'Postman',
    'Visual Studio',
    'VS Code',
    'Jira',
    'REST APIs',
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#060e20]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-heading text-[#00E5FF] uppercase tracking-widest text-sm">
            {t('about.label')}
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            {t('about.title')}
          </h2>

          <p className="text-lg text-[#bac9cc] max-w-3xl leading-8">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="glass-card rounded-2xl p-8 lg:col-span-2">
            <h3 className="font-heading text-2xl font-semibold text-white mb-8">
              {t('about.experienceTitle')}
            </h3>

            <div className="space-y-8">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.date}`}
                  className="relative border-l border-[#00E5FF]/30 pl-6"
                >
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-[#00E5FF] border-4 border-[#060e20]"></div>

                  <span className="text-[#00E5FF] font-code text-sm">
                    {item.date}
                  </span>

                  <h4 className="font-heading text-xl font-semibold text-white mt-2">
                    {item.role}
                  </h4>

                  <p className="text-[#bac9cc] leading-7 mt-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold text-white mb-8">
              {t('about.educationTitle')}
            </h3>

            <div className="space-y-8">
              {education.map((item) => (
                <div key={`${item.title}-${item.date}`}>
                  <span className="text-[#00E5FF] font-code text-sm">
                    {item.date}
                  </span>

                  <h4 className="font-heading text-lg font-semibold text-white mt-2">
                    {item.title}
                  </h4>

                  <p className="text-[#bac9cc] mt-2">
                    {item.place}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 lg:col-span-3">
            <h3 className="font-heading text-2xl font-semibold text-white mb-8">
              {t('about.skillsTitle')}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded bg-[#6f00be]/15 text-[#ddb7ff] text-sm font-code border border-[#ddb7ff]/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;