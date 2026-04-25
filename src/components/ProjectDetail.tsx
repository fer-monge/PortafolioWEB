import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { i18n } = useTranslation();

  const images = project.images ?? [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const description =
    i18n.language === 'en' ? project.descriptionEn : project.descriptionEs;

  const hasImages = images.length > 0;
  const currentImage = images[currentImageIndex];

  const goToPreviousImage = () => {
    if (!hasImages) return;

    setCurrentImageIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1,
    );
  };

  const goToNextImage = () => {
    if (!hasImages) return;

    setCurrentImageIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1,
    );
  };

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageOpen(false);
  }, [project.id]);

  return (
    <>
      <section
        id="project-detail"
        className="mt-20 glass-card rounded-2xl p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div>
            <span className="font-code text-[#00E5FF] text-sm uppercase tracking-widest">
              {i18n.language === 'en' ? 'Project detail' : 'Detalle del proyecto'}
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
            {i18n.language === 'en' ? 'Close' : 'Cerrar'}
          </button>
        </div>

        {hasImages && (
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#060e20] group">
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="block w-full cursor-zoom-in"
                aria-label={
                  i18n.language === 'en'
                    ? 'Open image in full size'
                    : 'Abrir imagen en grande'
                }
              >
                <img
                  src={currentImage}
                  alt={`${project.title} ${currentImageIndex + 1}`}
                  className="w-full h-[260px] sm:h-[380px] lg:h-[520px] object-contain bg-[#060e20]"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>

                <div className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur-md text-[#00E5FF] border border-[#00E5FF]/30 px-3 py-2 rounded-lg text-xs font-code opacity-0 group-hover:opacity-100 transition-opacity">
                  {i18n.language === 'en' ? 'Click to expand' : 'Clic para ampliar'}
                </div>
              </button>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050505]/85 text-[#00E5FF] border border-[#00E5FF]/40 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#00363d] hover:scale-110 transition-all shadow-lg"
                    aria-label="Previous image"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18L9 12L15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={goToNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050505]/85 text-[#00E5FF] border border-[#00E5FF]/40 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#00363d] hover:scale-110 transition-all shadow-lg"
                    aria-label="Next image"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18L15 12L9 6" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#050505]/85 backdrop-blur-md px-4 py-2 rounded-full text-xs font-code text-[#dae2fd] border border-white/10">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-5">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'w-8 bg-[#00E5FF]'
                        : 'w-2.5 bg-[#bac9cc]/40 hover:bg-[#00E5FF]/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4 className="font-heading text-xl font-semibold text-white mb-4">
              {i18n.language === 'en'
                ? 'Technologies used'
                : 'Tecnologías utilizadas'}
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
              {i18n.language === 'en' ? 'View system' : 'Ver sistema'}
            </a>
          )}
        </div>
      </section>

      {isImageOpen && currentImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#050505] text-white border border-white/20 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#00363d] transition-all"
            aria-label="Close image"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#050505]/90 text-[#00E5FF] border border-[#00E5FF]/40 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#00363d] hover:scale-110 transition-all"
              aria-label="Previous image"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
          )}

          <img
            src={currentImage}
            alt={`${project.title} ${currentImageIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#050505]/90 text-[#00E5FF] border border-[#00E5FF]/40 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#00363d] hover:scale-110 transition-all"
              aria-label="Next image"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18L15 12L9 6" />
              </svg>
            </button>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#050505]/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-code text-[#dae2fd] border border-white/10">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetail;