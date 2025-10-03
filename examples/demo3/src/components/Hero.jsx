import { Mail, MapPin, Globe, Github } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Hero() {
  const { personal } = cvData;

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {personal.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-primary-700 font-medium mb-6">
            {personal.title}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-primary-600 transition-colors"
              >
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <a
                href={`https://${personal.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                {personal.website}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <a
                href={`https://github.com/${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                {personal.github}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#publications" className="btn-secondary">
              View Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
