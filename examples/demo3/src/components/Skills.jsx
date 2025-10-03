import { Code, Wrench, BarChart3, Server } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Skills() {
  const { skills } = cvData;

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      items: skills.programming,
      color: 'primary'
    },
    {
      title: 'Technologies & Tools',
      icon: Wrench,
      items: skills.technologies,
      color: 'primary'
    },
    {
      title: 'Data Analysis & Methods',
      icon: BarChart3,
      items: skills.dataAnalysis,
      color: 'primary'
    },
    {
      title: 'High-Performance Computing',
      icon: Server,
      items: skills.hpc,
      color: 'primary'
    }
  ];

  return (
    <section id="skills" className="section-container bg-gray-100">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="h-6 w-6 text-primary-700" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
