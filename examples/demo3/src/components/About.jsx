import { cvData } from '../data/cvData';
import ScrollReveal from './ScrollReveal';
import { Target, Microscope } from 'lucide-react';

export default function About() {
  const { about, researchFocus } = cvData;

  return (
    <section id="about" className="section-container">
      <ScrollReveal>
        <h2 className="section-title text-center">About</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal delay={200}>
          <div className="card-glass hover-glow h-full">
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="h-6 w-6 text-primary-600" />
              <h3 className="text-2xl font-semibold gradient-text">Overview</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about.summary}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="card-glass hover-glow h-full">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-6 w-6 text-primary-600" />
              <h3 className="text-2xl font-semibold gradient-text">Research Focus</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-4 text-lg">
              {researchFocus.mainTopic}
            </p>
            <ul className="space-y-3">
              {researchFocus.areas.map((area, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-primary-500 mr-3 text-lg group-hover:text-primary-600 transition-colors">▸</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
