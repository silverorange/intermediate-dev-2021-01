import React, { useState } from 'react';
import { LanguageButtons } from './LanguageButtons';

export function Repos({ fetchedRepos, languages }) {
  const [filteredRepos, setFilteredRepos] = useState(fetchedRepos);
  const languageHandler = (lang) => {
    if (lang === 'all') {
      setFilteredRepos(fetchedRepos);
      return;
    }
    const filteredData = fetchedRepos.filter((repo) => repo.language === lang);
    setFilteredRepos(filteredData);
  };

  return (
    <div className="container">
      <LanguageButtons
        languages={languages}
        languageHandler={languageHandler}
      />
      {filteredRepos.map((repo) => (
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
