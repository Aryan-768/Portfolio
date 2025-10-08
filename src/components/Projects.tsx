import { useState } from 'react';
import { Star, GitFork, ExternalLink, Loader } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';
import { GitHubRepo } from '../types/github';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  // Read GitHub username from Vite env variable (VITE_GITHUB_USERNAME).
  // If not provided, fallback to 'github' (placeholder). You can set this in a .env file.
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'github';
  const { repos, loading, error } = useGitHub(username);
  const [selectedProject, setSelectedProject] = useState<GitHubRepo | null>(null);
  const [displayCount, setDisplayCount] = useState(6);

  const displayedRepos = repos.slice(0, displayCount);
  const hasMore = displayCount < repos.length;

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <Loader className="animate-spin mx-auto text-blue-600" size={48} />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading projects from GitHub...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p className="mb-4">Unable to load projects. Please check the GitHub username (<span className="font-mono">{username}</span>).</p>
            <p className="text-sm">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here are some of my recent projects pulled directly from GitHub. Click on any project to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedRepos.length === 0 ? (
              <div className="col-span-full text-center text-slate-600 dark:text-slate-400">
                No repositories found for <span className="font-mono">{username}</span>.
              </div>
            ) : (
              displayedRepos.map((repo, index) => (
              <div
                key={repo.id}
                className="group bg-white dark:bg-slate-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-slate-200 dark:border-slate-700 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(repo)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0"
                  />
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 min-h-[48px]">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{repo.forks_count}</span>
                  </div>
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 text-slate-500 dark:text-slate-400 text-xs">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
              ))
            )}
          </div>

          {hasMore && (
            <div className="text-center">
              <button
                onClick={() => setDisplayCount(displayCount + 6)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
