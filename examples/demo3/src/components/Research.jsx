import { Microscope } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Research() {
  const { experience } = cvData;

  return (
    <section id="research" className="section-container">
      <h2 className="section-title">Research Experience</h2>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Microscope className="h-6 w-6 text-primary-700" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium">
                      {exp.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-2">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
