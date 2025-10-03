import { BookOpen, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Publications() {
  const { publications } = cvData;

  return (
    <section id="publications" className="section-container bg-gray-100">
      <h2 className="section-title">Publications</h2>

      <div className="space-y-8">
        {/* Peer-Reviewed Articles */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary-700" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Peer-Reviewed Articles
            </h3>
          </div>

          <div className="space-y-4">
            {publications.peerReviewed.map((pub, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold text-lg flex-shrink-0">
                    {index + 1}.
                  </span>
                  <div>
                    <p className="text-gray-700 mb-1">
                      {pub.authors} ({pub.year}).
                    </p>
                    <p className="text-gray-900 font-medium mb-1">
                      {pub.title}.
                    </p>
                    <p className="text-gray-600 italic">
                      {pub.journal}, {pub.volume}, {pub.pages}.
                    </p>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm mt-1 inline-block"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preprints */}
        {publications.preprints.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-primary-700" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Preprints & Under Review
              </h3>
            </div>

            <div className="space-y-4">
              {publications.preprints.map((pub, index) => (
                <div key={index} className="card border-l-4 border-accent-500">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 font-bold text-lg flex-shrink-0">
                      {publications.peerReviewed.length + index + 1}.
                    </span>
                    <div>
                      <p className="text-gray-700 mb-1">
                        {pub.authors} ({pub.year}).
                      </p>
                      <p className="text-gray-900 font-medium mb-1">
                        {pub.title}.
                      </p>
                      <p className="text-gray-600 italic">
                        {pub.journal}, {pub.doi}.
                      </p>
                      {pub.status && (
                        <p className="text-accent-600 font-medium text-sm mt-1">
                          {pub.status}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
