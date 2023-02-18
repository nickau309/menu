import React from "react";
import { Tab } from "@headlessui/react";

export default function Menu({ items }) {
  return (
    <Tab.Panel className="grid justify-items-center gap-y-12 gap-x-8 lg:grid-cols-2">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article
            key={id}
            className="menu-item grid max-w-md gap-y-4 gap-x-5 md:max-w-2xl md:grid-cols-[225px_1fr]"
          >
            <img
              src={img}
              alt={title}
              className="h-52 w-full rounded border-4 border-yellow-600 object-cover md:h-44 xl:h-40"
            />
            <div className="text-sm sm:text-base">
              <header className="mb-2 flex justify-between font-bold tracking-wider">
                <h2 className="capitalize">{title}</h2>
                <span className="text-yellow-600">${price}</span>
              </header>
              <hr className="mb-4 border-dotted border-slate-500" />
              <p className="text-slate-500">{desc}</p>
            </div>
          </article>
        );
      })}
    </Tab.Panel>
  );
}
