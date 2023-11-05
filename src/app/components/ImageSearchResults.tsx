import Link from "next/link";
import React from "react";

import Parser from "html-react-parser";

interface Props {
  results: CustomSearchResponse;
}

export default function ImageSearchResults({ results }: Props) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <Link
                className="text-sm truncate group-hover:underline  decoration-blue-800"
                href={result.image.contextLink}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                />
              </Link>

              <Link
                className="text-sm truncate group-hover:underline  decoration-blue-800"
                href={result.image.contextLink}
              >
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link
                className="text-sm truncate group-hover:underline  decoration-blue-800"
                href={result.image.contextLink}
              >
                <p className="group-hover:underline text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}