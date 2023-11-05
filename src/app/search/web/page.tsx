import React from "react";

interface Params {
  searchParams: {
    searchTerm: string;
  };
}
export default async function WebSearchPage({ searchParams }: Params) {
  const response = await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_ENGINE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);

  const data = await response.json();
  const results = data.items as SearchResult[];
  return (
    <>
      {results.map((result) => (
        <h1 key={result.cacheId}>{result.title}</h1>
      ))}
    </>
  );
}
