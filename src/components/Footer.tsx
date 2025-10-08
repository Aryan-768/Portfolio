import { Github, Linkedin, Mail} from 'lucide-react';

export function Footer() {

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-slate-400">Building the future, one line at a time.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-iyengar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aryanbi0706@gmail.com"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Constant Progression
          </p>
        </div>
      </div>
    </footer>
  );
}
