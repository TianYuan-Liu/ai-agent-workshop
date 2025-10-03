import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Education() {
  const { education } = cvData;

  return (
    <section id="education" className="section-container bg-gray-100">
      <h2 className="section-title">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-700" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium">
                      {edu.institution}
                    </p>
                    {edu.organization && (
                      <p className="text-gray-600">{edu.organization}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{edu.period}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-1">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{detail}</span>
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
