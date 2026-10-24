"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";

export default function SearchBar({
  placeholder = "Find location near",
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch?.(value.trim());
      }}
      className="mx-auto flex w-full max-w-[600px] items-center gap-2 rounded-[4px] bg-white p-[5px] shadow-[0_14px_34px_-18px_rgba(0,0,0,0.5)]"
    >
      <label htmlFor="location-search" className="sr-only">
        {placeholder}
      </label>
      <input
        id="location-search"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className="h-11 min-w-0 flex-1 bg-transparent px-4 text-[15px] text-ink outline-none placeholder:text-[#8a8f98]"
      />
      <button
        type="submit"
        className="inline-flex h-11 shrink-0 items-center gap-2 rounded-[3px] bg-ink px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand"
      >
        Search
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
