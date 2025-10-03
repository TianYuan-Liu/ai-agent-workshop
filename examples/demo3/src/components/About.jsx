import { cvData } from '../data/cvData';

export default function About() {
  const { about, researchFocus } = cvData;

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            {about.summary}
          </p>
        </div>

        <div className="card">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Research Focus</h3>
          <p className="text-gray-800 font-medium mb-3">
            {researchFocus.mainTopic}
          </p>
          <ul className="space-y-2">
            {researchFocus.areas.map((area, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
