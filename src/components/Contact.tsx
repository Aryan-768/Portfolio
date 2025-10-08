import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Email</h4>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      aryanbi0706@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">SRM IST, CHENNAI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Let's Work Together
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
