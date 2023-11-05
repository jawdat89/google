"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("searchTerm");
  const startIndex = Number(searchParams.get("start")) || 1;

  return (
    <div className="flex text-blue-700 px-10 pb-4 justify-between sm:justify-start sm:space-x-60 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
