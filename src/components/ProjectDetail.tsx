import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(project.images?.[0]);

  const description =
    i18n.language === 'en' ? project.descriptionEn : project.descriptionEs;

  return (
    <section
      id="project-detail"
      className="mt-20 glass-card rounded-2xl p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        <div>
          <span className="font-code text-[#00E5FF] text-sm uppercase tracking-widest">
            Project detail
          </span>

          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
            {project.title}
          </h3>

          <p className="text-[#bac9cc] leading-8 mt-4 max-w-3xl">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="self-start border border-[#00E5FF]/30 text-[#00E5FF] px-4 py-2 rounded-lg font-heading hover:bg-[#00E5FF]/10 transition-colors"
        >
          Cerrar
        </button>
      </div>

      {selectedImage && (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#060e20] mb-6">
          <img
            src={selectedImage}
            alt={project.title}
            className="w-full max-h-[520px] object-contain bg-[#060e20]"
          />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {project.images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`rounded-lg overflow-hidden border transition-all ${
                selectedImage === image
                  ? 'border-[#00E5FF] scale-[1.02]'
                  : 'border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={project.title}
                className="w-full h-28 object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h4 className="font-heading text-xl font-semibold text-white mb-4">
            Tecnologías utilizadas
          </h4>

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

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#00E5FF] text-[#00363d] px-8 py-4 rounded-lg font-heading uppercase tracking-widest glow-cyan transition-all active:scale-95 text-center"
          >
            Ver sistema
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;