"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

const tabs = [
  { name: "All", icon: <AiOutlineSearch />, path: "/search/web" },
  { name: "Images", icon: <AiOutlineCamera />, path: "/search/image" },
];

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTap(path: string): void {
    router.push(`${path}?searchTerm=${searchTerm}`);
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3 px-2 ${
            pathname === tab.path && "text-blue-600 border-blue-600"
          }`}
          onClick={() => selectTap(tab.path)}
        >
          {/* Icon */}
          {tab.icon}

          {/* Text */}
          <p className="">{tab.name}</p>
        </div>
      ))}
    </div>
  );
}
