import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import { cvData } from '../data/cvData';
import ScrollReveal from './ScrollReveal';

export default function Publications() {
  const { publications } = cvData;

  return (
    <section id="publications" className="section-container">
      <ScrollReveal>
        <h2 className="section-title text-center">Publications</h2>
      </ScrollReveal>

      <div className="space-y-12">
        {/* Peer-Reviewed Articles */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                Peer-Reviewed Articles
              </h3>
            </div>

            <div className="space-y-4">
              {publications.peerReviewed.map((pub, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="card-glass hover-glow group hover:border-primary-300 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold gradient-text flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                        {index + 1}.
                      </span>
                      <div className="flex-grow">
                        <p className="text-gray-700 mb-2 font-medium">
                          {pub.authors} ({pub.year}).
                        </p>
                        <p className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-primary-700 transition-colors">
                          {pub.title}
                        </p>
                        <p className="text-gray-600 italic mb-3">
                          {pub.journal}, {pub.volume}, {pub.pages}.
                        </p>
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium bg-primary-50 px-3 py-1 rounded-full hover:bg-primary-100 transition-all"
                          >
                            <ExternalLink className="h-3 w-3" />
                            DOI: {pub.doi}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Preprints */}
        {publications.preprints.length > 0 && (
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Preprints & Under Review
                </h3>
              </div>

              <div className="space-y-4">
                {publications.preprints.map((pub, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="card-glass border-l-4 border-accent-400 hover-glow group hover:border-accent-500 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                          {publications.peerReviewed.length + index + 1}.
                        </span>
                        <div className="flex-grow">
                          <p className="text-gray-700 mb-2 font-medium">
                            {pub.authors} ({pub.year}).
                          </p>
                          <p className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-accent-600 transition-colors">
                            {pub.title}
                          </p>
                          <p className="text-gray-600 italic mb-3">
                            {pub.journal}, {pub.doi}.
                          </p>
                          {pub.status && (
                            <span className="inline-block bg-gradient-to-r from-accent-100 to-accent-200 text-accent-700 font-semibold text-sm px-3 py-1 rounded-full">
                              {pub.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
