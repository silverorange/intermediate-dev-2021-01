import React from 'react';

export function Repos({ fetchedRepos }) {
  return (
    <div className="container">
      {fetchedRepos.map((repo) => (
        <div className="repo" key={repo.id}>
          <h2>Repository's name: {repo.name}</h2>
          <h4>
            {' '}
            Description: {repo.description || '-'} | Language: {repo.language} |{' '}
            Fork Counts: {repo.forks} | Created at: {repo.created_at}
          </h4>
        </div>
      ))}
    </div>
  );
}
