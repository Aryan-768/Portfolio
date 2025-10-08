import { Code, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code,
      title: 'AL/ML',
      description: 'Proficient in React, TypeScript, Node.js, and modern web technologies'
    },
    {
      icon: Palette,
      title: 'Embedded Systems',
      description: 'Creating beautiful, intuitive interfaces with attention to detail'
    },
    {
      icon: Rocket,
      title: 'VLSI Design',
      description: 'Building fast, optimized applications that scale'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong communicator and team player with agile experience'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating innovative solutions. With years of experience
            in web development, I bring ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">My Journey</h3>
            <p className="text-lg leading-relaxed opacity-90">
              I started my journey in tech with a curiosity about how things work. Over the years,
              I've honed my skills through countless projects, collaborations, and challenges.
              Today, I'm dedicated to building software that not only works flawlessly but also
              delights users and solves real-world problems. When I'm not coding, you'll find me
              exploring new technologies, contributing to open source, or sharing knowledge with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
