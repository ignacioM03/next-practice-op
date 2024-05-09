import React from "react";
import { ButtonCard } from "../ButtonCard/ButtonCard";

export const PetCard = ({ pet }: { pet: any }) => {
  const { name, description, picture, id } = pet;
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-md">
      <img alt="" src={picture} className="h-56 w-full object-cover" />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          <ButtonCard id={id} />
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          ></span>
        </a>
      </div>
    </article>
  );
};
