import React from "react";
import { Tab } from "@headlessui/react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  return (
    <main className="flex min-h-screen justify-center bg-slate-100 px-4 py-20 text-slate-800">
      <section className="w-full max-w-7xl">
        <Tab.Group>
          <div className="mb-4 text-center md:mb-8">
            <h1 className="mb-3 text-3xl font-bold tracking-wider sm:text-4xl">
              Our Menu
            </h1>
            <hr className="mx-auto w-20 border-t-4 border-yellow-600" />
          </div>
          <Categories allCategories={allCategories} />
          <Tab.Panels className="px-4">
            {allCategories.map((category) => {
              const filteredItems =
                category === "all"
                  ? items
                  : items.filter((item) => item.category === category);
              return <Menu key={category} items={filteredItems} />;
            })}
          </Tab.Panels>
        </Tab.Group>
      </section>
    </main>
  );
}
