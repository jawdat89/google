"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [randomSearchLoading, setRandomSearchLoading] =
    useState<boolean>(false);

  const submit = (searchTerms: string = input) => {
    if (!searchTerms.trim()) return;

    router.push(`/search/web?searchTerm=${searchTerms}`);
  };

  function handleSubmitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    submit();
  }

  async function randomSearch() {
    setRandomSearchLoading(true);
    try {
      const res = await fetch("https://random-word-api.herokuapp.com/word");
      const data = await res.json();

      if (!data || !data.length || data[0].trim() === "") {
        setRandomSearchLoading(false);
        return;
      }

      submit(data[0]);
    } catch (error) {
      console.error("Failed to fetch random word:", error);
    } finally {
      setRandomSearchLoading(false);
    }
  }

  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl  border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow"
        onSubmit={handleSubmitForm}
      >
        <AiOutlineSearch className="texl-xl text-gray-500 mr-3" />

        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button className="btn" onClick={() => submit()}>
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
          disabled={randomSearchLoading}
          onClick={randomSearch}
        >
          {randomSearchLoading ? (
            <Image
              className="animate-spin h-6 text-center"
              src="spinner.svg"
              width={20}
              height={20}
              alt="Loading..."
            />
          ) : (
            "I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
