import { Mail, MapPin, Globe, Github, Phone } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Contact() {
  const { personal } = cvData;

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">Get in Touch</h2>

      <div className="max-w-2xl mx-auto">
        <div className="card">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary-50 transition-colors group"
            >
              <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                <Mail className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <p className="text-gray-900">{personal.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-lg">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Phone className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Phone</p>
                <p className="text-gray-900">{personal.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg">
              <div className="p-3 bg-primary-100 rounded-lg">
                <MapPin className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Location</p>
                <p className="text-gray-900">{personal.location}</p>
              </div>
            </div>

            <a
              href={`https://${personal.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary-50 transition-colors group"
            >
              <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                <Globe className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Website</p>
                <p className="text-gray-900">{personal.website}</p>
              </div>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="font-medium">View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
