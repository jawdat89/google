"use client";
import React, { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function SearchError({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-3xl mb-4">Something Went Wrong</h1>
      <button className="text-blue-500" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
