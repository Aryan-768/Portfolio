import { X, Star, GitFork, ExternalLink, Calendar } from 'lucide-react';
import { GitHubRepo } from '../types/github';

interface ProjectModalProps {
  project: GitHubRepo;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const formattedDate = new Date(project.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideInUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-start justify-between z-10">
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              {project.name}
            </h3>
            {project.language && (
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {project.language}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-6 mb-6 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Star size={18} />
              <span>{project.stargazers_count} stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork size={18} />
              <span>{project.forks_count} forks</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formattedDate}</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">
              Description
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description || 'No description available for this project.'}
            </p>
          </div>

          {project.topics && project.topics.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">
                Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
            >
              <ExternalLink size={18} />
              View on GitHub
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
