import { Code, Wrench, BarChart3, Server } from 'lucide-react';
import { cvData } from '../data/cvData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const { skills } = cvData;

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      items: skills.programming,
      gradient: 'from-blue-400 to-primary-600',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Technologies & Tools',
      icon: Wrench,
      items: skills.technologies,
      gradient: 'from-primary-400 to-primary-600',
      iconColor: 'text-primary-600'
    },
    {
      title: 'Data Analysis & Methods',
      icon: BarChart3,
      items: skills.dataAnalysis,
      gradient: 'from-accent-400 to-accent-600',
      iconColor: 'text-accent-600'
    },
    {
      title: 'High-Performance Computing',
      icon: Server,
      items: skills.hpc,
      gradient: 'from-purple-400 to-purple-600',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="skills" className="section-container gradient-bg rounded-3xl">
      <ScrollReveal>
        <h2 className="section-title text-center">Technical Skills</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group card-glass hover-glow hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-gradient-to-r ${category.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="skill-badge"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
