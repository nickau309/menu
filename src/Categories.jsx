import React from "react";
import { Tab } from "@headlessui/react";

export default function Categories({ allCategories }) {
  return (
    <Tab.List className="mb-8 flex justify-center gap-3 md:mb-16">
      {allCategories.map((category) => (
        <Tab
          key={category}
          className="rounded-full py-1.5 px-4 text-base capitalize tracking-wider text-yellow-600 ring-yellow-600/60 duration-200 ease-linear hover:bg-yellow-600/25 focus:outline-none focus:ring-2 ui-selected:bg-yellow-600 ui-selected:text-white"
        >
          {category}
        </Tab>
      ))}
    </Tab.List>
  );
}
