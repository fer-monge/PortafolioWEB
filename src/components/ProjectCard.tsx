import { useTranslation } from 'react-i18next';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const { t, i18n } = useTranslation();

  const description =
    i18n.language === 'en' ? project.descriptionEn : project.descriptionEs;

  return (
    <article className="glass-card rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)]">
      <button
        type="button"
        onClick={() => onSelectProject(project)}
        className="relative aspect-video overflow-hidden border-b border-white/5 bg-[#060e20] flex items-center justify-center text-left"
      >
        {project.coverImage ? (
  <img
    src={project.coverImage}
    alt={project.title}
    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
  />
) : (
  <span className="material-symbols-outlined text-[#00E5FF] text-6xl opacity-70 group-hover:scale-110 transition-transform duration-300">
    code
  </span>
)}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] to-transparent opacity-80"></div>

        {project.isFeatured && (
          <span className="absolute top-4 left-4 bg-[#00E5FF] text-[#00363d] px-3 py-1 rounded font-code text-xs">
            Featured
          </span>
        )}
      </button>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="font-heading text-2xl font-semibold text-[#00E5FF] text-left hover:underline"
          >
            {project.title}
          </button>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#bac9cc] hover:text-[#00E5FF] transition-colors"
                aria-label={t('projects.viewCode')}
              >
                <span className="material-symbols-outlined text-xl">
                
                </span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#bac9cc] hover:text-[#00E5FF] transition-colors"
                aria-label={t('projects.viewDemo')}
              >
                <span className="material-symbols-outlined text-xl">
                  
                </span>
              </a>
            )}
          </div>
        </div>

        <p className="text-[#bac9cc] leading-7 mb-8 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 rounded bg-[#6f00be]/15 text-[#ddb7ff] text-xs font-code border border-[#ddb7ff]/10"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;