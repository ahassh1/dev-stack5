import React, { useState } from "react";

import starImg from "../../assets/statImages.png";
import type { ItechType } from "../../types/TechType";

interface TechnologyCardProps {
  technology: ItechType;
  handleAddToSelect:(technology:ItechType) =>void
}

const TechnologyCard = ({ technology, handleAddToSelect }: TechnologyCardProps) => {
   const [selected, setSelected]= useState(false)
  const handleClick=() =>{
      handleAddToSelect(technology)
      setSelected(true)
    }
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">

        <div className="flex justify-between items-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-12 w-12 object-contain"
          />

          <span className="badge badge-secondary">
            {technology.badge}
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-4">
          {technology.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {technology.description}
        </p>

        <div className="mt-4 flex justify-between">

          <div className="flex items-center gap-2">
            <p className="border border-gray-200 text-[11px] px-3 py-1 text-gray-500 rounded-lg">
              {technology.category}
            </p>

            <p className="border border-gray-200 text-[11px] px-3 py-1 text-gray-500 rounded-lg">
              {technology.difficulty}
            </p>
          </div>

          <div className="flex items-center">
            <img
              src={starImg}
              className="w-5 h-5"
              alt="Rating"
            />

            <span className="text-[18px] font-semibold text-gray-700">
              {technology.rating}
            </span>
          </div>

        </div>

        <button disabled={selected} onClick={handleClick} className={`btn btn-block rounded-lg mt-6 text-white ${
    selected
      ? "cursor-not-allowed bg-gray-300 "
      : "bg-gray-800 hover:bg-white hover:text-black"
  }`}>
          {selected ? "Selected": "Explore"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;