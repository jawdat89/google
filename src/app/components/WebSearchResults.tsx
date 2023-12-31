import Link from "next/link";
import React from "react";

import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

interface Props {
  results: CustomSearchResponse;
}

export default function WebSearchResults({ results }: Props) {
  return (
    <div className="w-full mx-auto px-3 pb-40 md:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>

      {results.items.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group flex flex-col">
            <Link
              className="text-sm truncate group-hover:underline  decoration-blue-800"
              href={result.link}
            >
              {result.formattedUrl}
            </Link>
            <Link
              className="text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>

          {/* HTML snippet */}
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
