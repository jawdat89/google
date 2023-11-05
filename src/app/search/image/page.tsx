import Link from "next/link";
import React from "react";
import ImageSearchResults from "@/app/components/ImageSearchResults";

interface Params {
  searchParams: {
    searchTerm: string;
  };
}
export default async function ImageSearchPage({ searchParams }: Params) {
  const response = await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_ENGINE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image
  `);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  const data = await response.json();
  const results = data as CustomSearchResponse;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
          .
        </p>
      </div>
    );
  }
  return <>{results && <ImageSearchResults results={results} />}</>;
}
