import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);

    setTimeout(() => {
      document
        .getElementById('project-detail')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0b1326]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-heading text-[#00E5FF] uppercase tracking-widest text-sm">
            {t('projects.label')}
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            {t('projects.title')}
          </h2>

          <p className="text-lg text-[#bac9cc] max-w-2xl leading-8">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={handleSelectProject}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;