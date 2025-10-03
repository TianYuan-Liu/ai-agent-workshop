import { Mail, MapPin, Globe, Github, BookOpen } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Hero() {
  const { personal } = cvData;

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="section-container relative">
        <div className="text-center">
          <h1 className="font-bold mb-6 animate-fade-in-down gradient-text">
            {personal.name}
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-primary-700 font-semibold mb-8 animate-fade-in-up tracking-wide">
            {personal.title}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-700 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 hover:text-primary-600 transition-all duration-300 hover:scale-105">
              <MapPin className="h-5 w-5 text-primary-500" />
              <span className="font-medium">{personal.location}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Mail className="h-5 w-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-primary-600 transition-all duration-300 font-medium hover:scale-105 inline-block"
              >
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Globe className="h-5 w-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
              <a
                href={`https://${personal.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-all duration-300 font-medium hover:scale-105 inline-block"
              >
                {personal.website}
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Github className="h-5 w-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
              <a
                href={`https://github.com/${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-all duration-300 font-medium hover:scale-105 inline-block"
              >
                {personal.github}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="btn-primary group">
              <span>Get in Touch</span>
              <Mail className="h-4 w-4 group-hover:animate-bounce-soft" />
            </a>
            <a href="#publications" className="btn-secondary group">
              <span>View Publications</span>
              <BookOpen className="h-4 w-4 group-hover:animate-bounce-soft" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
