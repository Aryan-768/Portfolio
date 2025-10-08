import { useState, useEffect } from 'react';
import { GitHubRepo, GitHubUser } from '../types/github';

export function useGitHub(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError(null);

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUser(userData);
        setRepos(reposData
          .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return { repos, user, loading, error };
}
