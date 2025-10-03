import { Code2, ExternalLink } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Projects() {
  const { projects } = cvData;

  const projectLinks = {
    'SQANTI3': 'https://github.com/ConesaLab/SQANTI3',
    'SQANTI-SIM': 'https://github.com/ConesaLab/SQANTI-SIM',
    'PaintOmics 4': 'http://www.paintomics.org/',
    'MirCure': 'https://github.com/ConesaLab/MirCure'
  };

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Major Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card hover:border-primary-300 border border-transparent transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary-700" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.name}
                </h3>
              </div>
              {projectLinks[project.name] && (
                <a
                  href={projectLinks[project.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                  aria-label={`Visit ${project.name}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>

            <p className="text-gray-700 mb-3">
              {project.description}
            </p>

            <p className="text-gray-600 text-sm mb-3">
              <span className="font-medium">Contribution:</span> {project.contribution}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
