import React, { useEffect, useState } from 'react';
import { Repos } from './Repos';

export function App() {
  const [fetchedRepos, setFetchedRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('http://localhost:4000/repos');
      const data = await response.json();
      data.sort(function (a, b) {
        const bb = new Date(b.created_at);
        const aa = new Date(a.created_at);
        return bb - aa;
      });
      setFetchedRepos(data);
    }

    fetchRepos();
  }, []);

  return (
    <div>
      {fetchedRepos.length > 0 && <Repos fetchedRepos={fetchedRepos} />}
    </div>
  );
}
