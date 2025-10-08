import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left animate-slideInLeft">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Aryan Iyengar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-light">
              Tech enthusiast, Avid learner, and problem solver
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
              Passionate about building elegant solutions to complex problems. I specialize in AI/ML and embedded systems technologies
              and love creating user-centric applications that make a difference.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 justify-center md:justify-start">
              <a
                href="https://github.com/Aryan-768"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-all hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-iyengar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>SRM IST, chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 animate-slideInRight">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src="7db6e6d2-a848-41f3-9487-1dd159610579.jpg"
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
